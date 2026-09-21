import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  number: string;
}

const SECTIONS: Section[] = [
  { id: 'home', label: 'Intro', number: '00' },
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'skills', label: 'Skills', number: '03' },
  { id: 'projects', label: 'Projects', number: '04' },
  { id: 'academics', label: 'Academics', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

export default function SectionRail() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['contact', 'academics', 'projects', 'skills', 'experience', 'about', 'home'];
      const scrollPos = window.scrollY + 160;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const activeIndex = Math.max(
    0,
    SECTIONS.findIndex(s => s.id === activeSection)
  );
  const progressPercent = (activeIndex / (SECTIONS.length - 1)) * 100;

  return (
    <nav
      className="section-rail"
      aria-label="Section navigation"
      role="navigation"
    >
      {/* Background track line */}
      <div className="section-rail-track" aria-hidden="true">
        <div
          className="section-rail-fill"
          style={{ height: `${progressPercent}%` }}
        />
      </div>

      {/* Section dots list */}
      <div className="section-rail-list">
        {SECTIONS.map((section, idx) => {
          const isActive = section.id === activeSection;
          const isPassed = idx <= activeIndex;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className="section-rail-item-wrapper"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Floating editorial tooltip */}
              <div
                className={`section-rail-tooltip ${isHovered ? 'visible' : ''}`}
                aria-hidden={!isHovered}
              >
                <span className="section-rail-tooltip-num">{section.number}</span>
                <span className="section-rail-tooltip-text">{section.label}</span>
                <span className="section-rail-tooltip-arrow" />
              </div>

              {/* Waypoint button */}
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`section-rail-dot-btn ${isActive ? 'active' : ''} ${
                  isPassed ? 'passed' : ''
                }`}
                aria-label={`Jump to ${section.label} section`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="section-rail-dot" />
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
