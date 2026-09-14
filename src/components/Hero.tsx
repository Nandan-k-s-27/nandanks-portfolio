import { useTypewriter } from '../hooks/useTypewriter';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';
import { ArrowRight, Sparkles, Terminal, Code2, Briefcase, GraduationCap } from 'lucide-react';

const ROLES = [
  'Full-Stack Developer',
  'Cloud Data Engineering Intern',
  'AI & Real-Time Systems Builder',
  'WebRTC & Distributed Architecture',
  'MCA Student @ CMR IT (8.88 CGPA)',
];

export default function Hero() {
  const roleText = useTypewriter(ROLES);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-content">
        {/* ── System Status Pill ── */}
        <div className="hero-status-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
          <span className="font-mono text-xs text-[var(--text-sec)] font-medium tracking-wide">
            SYSTEM ONLINE &bull; BENGALURU, INDIA &bull; OPEN TO ROLES
          </span>
        </div>

        <p className="hero-greeting flex items-center gap-2">
          <Terminal size={14} className="text-[var(--accent)]" />
          Hello, world! I'm
        </p>

        <h1 className="hero-name">Nandan K S</h1>

        <div className="hero-roles">
          <span className="role-text font-mono text-[var(--accent)]">{roleText}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-sub">
          Software Developer building production-grade web applications with{' '}
          <strong>React, Node.js,</strong> and <strong>Python</strong>. Hands-on expertise in{' '}
          <strong>real-time systems (WebRTC, Socket.IO, Redis)</strong>, cloud data engineering on{' '}
          <strong>Azure Data Factory &amp; Databricks</strong>, and voice-driven AI architectures.
        </p>

        {/* ── Quick Engineering Stats ── */}
        <div className="hero-stats-grid grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
          <div className="stat-card p-3 rounded-xl border border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-1">
              <Briefcase size={13} className="text-[var(--accent)]" />
              <span>Experience</span>
            </div>
            <div className="text-xl font-bold font-mono text-[var(--text-primary)]">2 Internships</div>
            <div className="text-[11px] text-[var(--text-sec)]">Bandhan &bull; UnicornReady</div>
          </div>

          <div className="stat-card p-3 rounded-xl border border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-1">
              <GraduationCap size={13} className="text-[var(--accent)]" />
              <span>MCA Academic</span>
            </div>
            <div className="text-xl font-bold font-mono text-[var(--text-primary)]">8.88 CGPA</div>
            <div className="text-[11px] text-[var(--text-sec)]">CMR Institute of Tech</div>
          </div>

          <div className="stat-card p-3 rounded-xl border border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-1">
              <Sparkles size={13} className="text-[var(--accent)]" />
              <span>Research</span>
            </div>
            <div className="text-xl font-bold font-mono text-[var(--text-primary)]">1 Paper</div>
            <div className="text-[11px] text-[var(--text-sec)]">IJARETY (IF: 8.152)</div>
          </div>

          <div className="stat-card p-3 rounded-xl border border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-1">
              <Code2 size={13} className="text-[var(--accent)]" />
              <span>Hackathons</span>
            </div>
            <div className="text-xl font-bold font-mono text-[var(--text-primary)]">1st Place</div>
            <div className="text-[11px] text-[var(--text-sec)]">Full-Stack E-Commerce</div>
          </div>
        </div>

        {/* ── CTA Buttons ── */}
        <div className="hero-cta flex items-center flex-wrap gap-3 mb-8">
          <a href="#projects" className="btn btn-primary">
            Explore Projects
            <ArrowRight size={15} />
          </a>
          <a href="#experience" className="btn btn-outline">
            View Experience
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        {/* ── Social Profiles (Safe, Non-Sensitive) ── */}
        <div className="hero-socials flex items-center gap-3">
          <a
            href="https://github.com/Nandan-k-s-27"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nandanks2003"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:nandanks016@gmail.com"
            className="social-icon"
            aria-label="Send Email"
            title="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
