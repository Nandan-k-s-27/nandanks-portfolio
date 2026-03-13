import { useState, useEffect } from 'react';
import { Home, User, Code2, Layers, Mail, Sun, Moon } from 'lucide-react';
import { LimelightNav, type NavItem } from '@/components/ui/limelight-nav';
import { useTheme } from '@/components/ThemeProvider';

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_ITEMS_BASE: { id: SectionId; icon: React.ReactElement; label: string }[] = [
  { id: 'home',     icon: <Home />,    label: 'Home'     },
  { id: 'about',    icon: <User />,    label: 'About'    },
  { id: 'skills',   icon: <Code2 />,   label: 'Skills'   },
  { id: 'projects', icon: <Layers />,  label: 'Projects' },
  { id: 'contact',  icon: <Mail />,    label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<SectionId>('home');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current: SectionId = 'home';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) {
          const id = sec.id as SectionId;
          if ((SECTIONS as readonly string[]).includes(id)) current = id;
        }
      });
      setActiveSectionId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeIndex = SECTIONS.indexOf(activeSectionId);

  const navItems: NavItem[] = NAV_ITEMS_BASE.map(({ id, icon, label }) => ({
    id,
    icon,
    label,
    onClick: () => scrollToSection(id),
  }));

  const limelightShared = {
    items: navItems,
    activeIndex,
    limelightClassName: 'bg-[var(--accent)] shadow-[0_50px_15px_var(--accent)]',
    iconClassName: 'text-[var(--text-primary)]',
    className: 'border-[var(--border)] !bg-[var(--bg-card)]',
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a className="nav-logo" href="#home">Nandan K S</a>

          <div className="flex items-center gap-4">
            {/* Desktop nav — LimelightNav in header */}
            <div className="hidden sm:block">
              <LimelightNav {...limelightShared} />
            </div>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-all flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile bottom floating nav */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[200] block sm:hidden">
        <LimelightNav {...limelightShared} />
      </div>
    </>
  );
}
