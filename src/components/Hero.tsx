import { useTypewriter } from '../hooks/useTypewriter';
import { GitHubIcon, LinkedInIcon } from './Icons';

const ROLES = [
  'Full-Stack Developer',
  'AI & Real-time Systems',
  'MCA Student @ CMR IT',
  'Python & React Builder',
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
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Nandan K S</h1>
        <div className="hero-roles">
          <span className="role-text">{roleText}</span>
          <span className="cursor" aria-hidden="true">
            |
          </span>
        </div>
        <p className="hero-sub">
          MCA Student at CMR Institute of Technology, Bengaluru &nbsp;&middot;&nbsp; Building
          AI-powered &amp; real-time web solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/Nandan-k-s-27"
            target="_blank"
            rel="noopener"
            className="social-icon"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/nandanks2003"
            target="_blank"
            rel="noopener"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
