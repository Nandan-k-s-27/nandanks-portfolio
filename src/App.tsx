import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfiniteMarquee from './components/InfiniteMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PublicationAndEducation from './components/PublicationAndEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    /* ── Reveal on scroll ── */
    const revealEls = document.querySelectorAll(
      '.section-title, .section-label, .skill-card, .project-card, .profile-card, .timeline-item, .publication-card, .education-card, .contact-wrapper, .pillar-card',
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    revealEls.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InfiniteMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <PublicationAndEducation />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
