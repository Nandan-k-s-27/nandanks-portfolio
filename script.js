/* ─── Typewriter ──────────────────────────────────── */
const roles = [
  'Full-Stack Developer',
  'AI & Real-time Systems',
  'MCA Student @ CMR IT',
  'Python & React Builder',
];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeWriter() {
  const current = roles[roleIdx];
  if (!deleting) {
    roleEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 60 : 80);
}
typeWriter();

/* ─── Navbar: scroll effect + active section ─────── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  /* Scrolled class */
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  /* Active link */
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ─── Mobile hamburger ────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

/* Close menu on link click */
navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─── Reveal on scroll ───────────────────────────── */
const revealEls = document.querySelectorAll(
  '.skill-card, .project-card, .about-grid, .contact-wrapper, .contact-tagline'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

/* ─── GlowCard spotlight pointer tracking (skills) ── */
(function initGlowCards() {
  const glowCards = document.querySelectorAll('.glow-card');
  if (!glowCards.length) return;

  /* Set per-card hue from data attribute */
  glowCards.forEach(card => {
    const hue = card.dataset.glowHue || 220;
    card.style.setProperty('--glow-hue', hue);
  });

  document.addEventListener('pointermove', e => {
    glowCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
    });
  }, { passive: true });
})();

/* ─── GlowingEffect conic border tracking (projects) ─ */
(function initGlowingEffect() {
  const cards = document.querySelectorAll('.glowing-card');
  if (!cards.length) return;

  const PROXIMITY = 64;
  const INACTIVE_ZONE = 0.01;
  const SPREAD = 40;

  let animFrameId = 0;
  let lastPointer = { x: 0, y: 0 };

  function handleMove(e) {
    if (e) lastPointer = { x: e.clientX, y: e.clientY };
    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(() => {
      const mx = lastPointer.x;
      const my = lastPointer.y;
      cards.forEach(card => {
        const { left, top, width, height } = card.getBoundingClientRect();

        const centerX = left + width * 0.5;
        const centerY = top + height * 0.5;
        const dist = Math.hypot(mx - centerX, my - centerY);
        const inactiveR = 0.5 * Math.min(width, height) * INACTIVE_ZONE;

        if (dist < inactiveR) {
          card.style.setProperty('--glowing-active', '0');
          return;
        }

        const isActive =
          mx > left - PROXIMITY &&
          mx < left + width + PROXIMITY &&
          my > top - PROXIMITY &&
          my < top + height + PROXIMITY;

        card.style.setProperty('--glowing-active', isActive ? '1' : '0');

        if (!isActive) return;

        const angle = (180 * Math.atan2(my - centerY, mx - centerX)) / Math.PI + 90;
        const currentAngle = parseFloat(card.style.getPropertyValue('--glowing-start')) || 0;
        const diff = ((angle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + diff;
        card.style.setProperty('--glowing-start', newAngle.toFixed(2));
        card.style.setProperty('--glowing-spread', SPREAD);
      });
    });
  }

  document.body.addEventListener('pointermove', handleMove, { passive: true });
  window.addEventListener('scroll', () => handleMove(null), { passive: true });
})();
