import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    /* ── Reveal on scroll ── */
    const revealEls = document.querySelectorAll(
      '.skill-card, .project-card, .about-grid, .contact-wrapper, .contact-tagline',
    );
    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealEls.forEach(el => observer.observe(el));

    /* ── GlowCard spotlight pointer tracking (skills) ── */
    const glowCards = document.querySelectorAll<HTMLElement>('.glow-card');
    glowCards.forEach(card => {
      const hue = card.dataset.glowHue ?? '220';
      card.style.setProperty('--glow-hue', hue);
    });

    const glowPointerHandler = (e: Event) => {
      const pe = e as PointerEvent;
      glowCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--glow-x', pe.clientX - rect.left + 'px');
        card.style.setProperty('--glow-y', pe.clientY - rect.top + 'px');
      });
    };
    document.addEventListener('pointermove', glowPointerHandler, { passive: true });

    /* ── GlowingEffect conic border tracking (projects) ── */
    const glowingCards = document.querySelectorAll<HTMLElement>('.glowing-card');
    const PROXIMITY = 64;
    const INACTIVE_ZONE = 0.01;
    const SPREAD = 40;
    let animFrameId = 0;
    const lastPointer = { x: 0, y: 0 };

    function updateGlowing() {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(() => {
        const { x: mx, y: my } = lastPointer;
        glowingCards.forEach(card => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const cx = left + width * 0.5;
          const cy = top + height * 0.5;
          const dist = Math.hypot(mx - cx, my - cy);
          if (dist < 0.5 * Math.min(width, height) * INACTIVE_ZONE) {
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
          const angle = (180 * Math.atan2(my - cy, mx - cx)) / Math.PI + 90;
          const cur = parseFloat(card.style.getPropertyValue('--glowing-start')) || 0;
          const diff = ((angle - cur + 180) % 360) - 180;
          card.style.setProperty('--glowing-start', (cur + diff).toFixed(2));
          card.style.setProperty('--glowing-spread', String(SPREAD));
        });
      });
    }

    const glowingPointerHandler = (e: Event) => {
      const pe = e as PointerEvent;
      lastPointer.x = pe.clientX;
      lastPointer.y = pe.clientY;
      updateGlowing();
    };
    const glowingScrollHandler = () => updateGlowing();

    document.body.addEventListener('pointermove', glowingPointerHandler, { passive: true });
    window.addEventListener('scroll', glowingScrollHandler, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('pointermove', glowPointerHandler);
      document.body.removeEventListener('pointermove', glowingPointerHandler);
      window.removeEventListener('scroll', glowingScrollHandler);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
