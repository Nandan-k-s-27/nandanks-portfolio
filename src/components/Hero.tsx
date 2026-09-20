import { useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, GraduationCap, BookOpen, Trophy } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons';
import CountUp from './CountUp';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
      hero.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
    };

    hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Interactive Background Grid & Ambient Spotlight */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Status Pill */}
          <div className="hero-status-pill">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="status-beacon-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-[var(--text-sec)]">
              Bengaluru, India &bull; Open to Software Engineering Roles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Building resilient distributed systems, real-time architectures, and modern web applications.
          </h1>

          {/* Subtitle / Bio */}
          <p className="hero-bio">
            I'm <strong className="text-[var(--text-primary)]">Nandan K S</strong>, a software developer and Master of Computer Applications student at{' '}
            <strong className="text-[var(--text-primary)]">CMR Institute of Technology, Bengaluru</strong> (8.88 CGPA). Hands-on experience building production web platforms with{' '}
            <strong className="text-[var(--text-primary)]">React, TypeScript, Node.js</strong>, low-latency streaming with{' '}
            <strong className="text-[var(--text-primary)]">WebRTC &amp; Redis</strong>, and cloud data pipelines on{' '}
            <strong className="text-[var(--text-primary)]">Azure Data Factory &amp; Databricks</strong>.
          </p>

          {/* Engineering Metrics Strip */}
          <div className="hero-stats-strip">
            <div className="stat-item">
              <div className="flex items-center gap-1.5 text-[var(--text-muted)] mb-1">
                <Briefcase size={14} className="text-[var(--accent)]" />
                <span className="stat-label">Industry</span>
              </div>
              <div className="stat-value">
                <CountUp end={2} duration={900} delay={400} /> Internships
              </div>
              <div className="stat-meta">Bandhan &bull; UnicornReady</div>
            </div>

            <div className="stat-item">
              <div className="flex items-center gap-1.5 text-[var(--text-muted)] mb-1">
                <GraduationCap size={14} className="text-[var(--accent)]" />
                <span className="stat-label">Academics</span>
              </div>
              <div className="stat-value">
                <CountUp end={8.88} decimals={2} duration={1300} delay={400} /> CGPA
              </div>
              <div className="stat-meta">CMR Institute of Tech</div>
            </div>

            <div className="stat-item">
              <div className="flex items-center gap-1.5 text-[var(--text-muted)] mb-1">
                <BookOpen size={14} className="text-[var(--accent)]" />
                <span className="stat-label">Research</span>
              </div>
              <div className="stat-value">
                <CountUp end={1} duration={800} delay={400} /> Publication
              </div>
              <div className="stat-meta">IJARETY (Impact: 8.152)</div>
            </div>

            <div className="stat-item">
              <div className="flex items-center gap-1.5 text-[var(--text-muted)] mb-1">
                <Trophy size={14} className="text-[var(--accent)]" />
                <span className="stat-label">Hackathons</span>
              </div>
              <div className="stat-value">
                <CountUp end={1} suffix="st" duration={800} delay={400} /> Place
              </div>
              <div className="stat-meta">Full-Stack Development</div>
            </div>
          </div>

          {/* CTA Actions & Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="hero-actions mb-0">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>
              <a href="#experience" className="btn btn-outline">
                Industry Experience
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-socials sm:pl-3 sm:border-l sm:border-[var(--border)]">
              <a
                href="https://github.com/Nandan-k-s-27"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nandanks2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:nandanks016@gmail.com"
                className="social-btn"
                aria-label="Send Email"
                title="Email"
              >
                <EmailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Wave Transition into About Section */}
      <div className="section-divider-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none" className="text-[var(--bg-secondary)]">
          <path
            d="M0,24 C240,56 480,8 720,32 C960,56 1200,16 1440,28 L1440,64 L0,64 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
