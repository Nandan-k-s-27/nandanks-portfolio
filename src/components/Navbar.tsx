import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code2, Layers, GraduationCap, Mail, Sun, Moon } from 'lucide-react';
import { LimelightNav, type NavItem } from '@/components/ui/limelight-nav';
import { useTheme } from '@/components/ThemeProvider';

const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'academics', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_ITEMS_BASE: { id: SectionId; icon: React.ReactElement; label: string }[] = [
  { id: 'home',       icon: <Home size={18} />,          label: 'Home'       },
  { id: 'about',      icon: <User size={18} />,          label: 'About'      },
  { id: 'experience', icon: <Briefcase size={18} />,     label: 'Experience' },
  { id: 'skills',     icon: <Code2 size={18} />,         label: 'Skills'     },
  { id: 'projects',   icon: <Layers size={18} />,        label: 'Projects'   },
  { id: 'academics',  icon: <GraduationCap size={18} />, label: 'Academics'  },
  { id: 'contact',    icon: <Mail size={18} />,          label: 'Contact'    },
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
        if (window.scrollY >= sec.offsetTop - 140) {
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

  const activeIndex = Math.max(0, SECTIONS.indexOf(activeSectionId));

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
    className: 'border-[var(--border)] !bg-[var(--bg-card)] !h-12 sm:!h-14',
    iconContainerClassName: '!px-2.5 sm:!px-4 !py-2',
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

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a className="nav-logo flex items-center gap-2 group" href="#home">
            <span className="font-mono text-sm px-2 py-0.5 rounded bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--accent)]">
              &lt;/&gt;
            </span>
            <span className="font-bold tracking-tight">NANDAN.DEV</span>
          </a>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <LimelightNav {...limelightShared} />
            </div>

            {/* Quick Link to Contact on Medium screens */}
            <a
              href="#contact"
              className="hidden md:inline-flex lg:hidden text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--btn-glass)] text-[var(--text-sec)] hover:text-[var(--text-primary)]"
            >
              Get In Touch
            </a>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--accent)] hover:border-[var(--border-hover)] transition-all flex items-center justify-center shadow-sm"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet bottom floating nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] block lg:hidden max-w-[95vw]">
        <LimelightNav {...limelightShared} />
      </div>
    </>
  );
}
