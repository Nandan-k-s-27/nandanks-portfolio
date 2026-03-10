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
  const glowCards = document.querySelectorAll('.glow-card[data-glow]');
  if (!glowCards.length) return;

  /* Read per-card data attributes for base/spread */
  glowCards.forEach(card => {
    const base   = card.dataset.glowBase   || 220;
    const spread = card.dataset.glowSpread || 200;
    card.style.setProperty('--base', base);
    card.style.setProperty('--spread', spread);
  });

  document.addEventListener('pointermove', e => {
    const { clientX: x, clientY: y } = e;
    glowCards.forEach(card => {
      card.style.setProperty('--x', x.toFixed(2));
      card.style.setProperty('--y', y.toFixed(2));
      card.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      card.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
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

  function handleMove(e) {
    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(() => {
      cards.forEach(card => {
        const el = card.querySelector('.glowing-effect');
        if (!el) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const mouseX = e ? e.clientX : 0;
        const mouseY = e ? e.clientY : 0;

        const centerX = left + width * 0.5;
        const centerY = top + height * 0.5;
        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);
        const inactiveR = 0.5 * Math.min(width, height) * INACTIVE_ZONE;

        if (dist < inactiveR) {
          card.style.setProperty('--glowing-active', '0');
          return;
        }

        const isActive =
          mouseX > left - PROXIMITY &&
          mouseX < left + width + PROXIMITY &&
          mouseY > top - PROXIMITY &&
          mouseY < top + height + PROXIMITY;

        card.style.setProperty('--glowing-active', isActive ? '1' : '0');

        if (!isActive) return;

        /* Compute angle for conic-gradient sweep */
        const angle = (180 * Math.atan2(mouseY - centerY, mouseX - centerX)) / Math.PI + 90;
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
