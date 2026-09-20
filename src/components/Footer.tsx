import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-[var(--text-primary)] tracking-tight">
              Nandan K S
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Software Engineer &bull; Full-Stack, Real-Time Systems &bull; Cloud Data Pipelines
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-[var(--text-sec)]">
            <a href="#about" className="animated-link">About</a>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <a href="#experience" className="animated-link">Experience</a>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <a href="#skills" className="animated-link">Skills</a>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <a href="#projects" className="animated-link">Projects</a>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <a href="#academics" className="animated-link">Academics</a>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <a href="#contact" className="animated-link">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Nandan-k-s-27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nandanks2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:nandanks016@gmail.com"
              className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-sm"
              aria-label="Email"
              title="Email"
            >
              <EmailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div>
            &copy; {currentYear} Nandan K S. Designed &amp; built with modern web standards.
          </div>
          <div>
            Bengaluru, Karnataka, India
          </div>
        </div>
      </div>
    </footer>
  );
}
