import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import Magnetic from '@/components/Magnetic';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'academics', label: 'Academics' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = (typeof NAV_LINKS)[number]['id'] | 'home';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Sliding pill refs
  const navGroupRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

      const sectionIds: SectionId[] = ['contact', 'academics', 'projects', 'skills', 'experience', 'about', 'home'];
      const scrollPos = window.scrollY + 140;

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

  // Update pill position whenever activeSection changes
  useEffect(() => {
    const activeId = NAV_LINKS.find(l => l.id === activeSection)?.id;
    if (!activeId) {
      setPillStyle(null);
      return;
    }
    const btn = buttonRefs.current.get(activeId);
    const nav = navGroupRef.current;
    if (!btn || !nav) {
      setPillStyle(null);
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setPillStyle({
      left: btnRect.left - navRect.left,
      width: btnRect.width,
    });
  }, [activeSection]);

  // Recalculate on resize
  useEffect(() => {
    const recalc = () => {
      const activeId = NAV_LINKS.find(l => l.id === activeSection)?.id;
      if (!activeId) return;
      const btn = buttonRefs.current.get(activeId);
      const nav = navGroupRef.current;
      if (!btn || !nav) return;
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({ left: btnRect.left - navRect.left, width: btnRect.width });
    };
    window.addEventListener('resize', recalc, { passive: true });
    return () => window.removeEventListener('resize', recalc);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeToggle = (e: React.MouseEvent) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    try {
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 400,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        })
        .catch(() => {
          // Animation fallback: state has already been safely committed
        });
    } catch {
      setTheme(nextTheme);
    }
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      {/* Scroll Reading Progress Bar */}
      <div
        className="navbar-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="nav-container">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="nav-logo group"
        >
          <span className="font-bold text-[var(--text-primary)] tracking-tight">Nandan K S</span>
          <span className="hidden sm:inline-block text-xs font-normal text-[var(--text-muted)] border-l border-[var(--border)] pl-2.5">
            Software Engineer
          </span>
        </a>

        {/* Desktop Navigation Links with Sliding Pill */}
        <nav className="hidden md:flex items-center gap-1 relative" aria-label="Main Navigation" ref={navGroupRef}>
          {/* Spring-animated sliding background pill */}
          {pillStyle && (
            <span
              className="nav-active-pill"
              aria-hidden="true"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
            />
          )}

          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                ref={(el) => {
                  if (el) buttonRefs.current.set(link.id, el);
                  else buttonRefs.current.delete(link.id);
                }}
                onClick={() => scrollTo(link.id)}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick CTA */}
          <Magnetic strength={0.25}>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-secondary)] transition-all shadow-sm group active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Magnetic>

          {/* Theme Toggle */}
          <Magnetic strength={0.4}>
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all flex items-center justify-center shadow-sm active:scale-90"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={17} className="transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon size={17} className="transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>
          </Magnetic>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] transition-all active:scale-90"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-sec)] hover:bg-[var(--btn-glass)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 text-center btn btn-primary text-xs py-2.5"
            >
              Get In Touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
