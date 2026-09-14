import { Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-t border-[var(--border)] bg-[var(--bg-primary)] py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-sm font-bold text-[var(--text-primary)]">
              <span className="text-[var(--accent)]">&lt;/&gt;</span>
              <span>NANDAN.DEV</span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Software Developer &bull; Cloud Data Engineering &bull; Real-Time &amp; AI Systems
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-sec)]">
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <span>&bull;</span>
            <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <span>&bull;</span>
            <a href="#skills" className="hover:text-[var(--accent)] transition-colors">Skills</a>
            <span>&bull;</span>
            <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
            <span>&bull;</span>
            <a href="#academics" className="hover:text-[var(--accent)] transition-colors">Academics</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Nandan-k-s-27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--accent)] transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nandanks2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--accent)] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:nandanks016@gmail.com"
              className="p-2 rounded-lg bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--accent)] transition-all"
              aria-label="Email"
            >
              <EmailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-emerald-400" />
            <span>&copy; {currentYear} Nandan K S. Built with React, TypeScript &amp; Tailwind CSS.</span>
          </div>
          <div className="font-mono text-[11px] text-[var(--text-muted)]">
            Bengaluru, Karnataka &bull; Latency-optimized
          </div>
        </div>
      </div>
    </footer>
  );
}
