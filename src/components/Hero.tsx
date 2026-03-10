import { useEffect, useRef } from 'react';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let clickHandler: (() => void) | undefined;
    const heroEl = document.getElementById('home');

    (async () => {
      try {
        const cdnUrl =
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
        const { default: TubesCursor } = await import(/* @vite-ignore */ cdnUrl);

        const app = TubesCursor(canvas, {
          tubes: {
            colors: ['#6366f1', '#8b5cf6', '#a78bfa'],
            lights: {
              intensity: 200,
              colors: ['#4f46e5', '#6366f1', '#c4b5fd', '#818cf8'],
            },
          },
        });

        document.querySelectorAll<HTMLElement>('.blob').forEach(el => {
          el.style.transition = 'opacity 1.4s ease';
          el.style.opacity = '0';
        });

        const randomHex = () =>
          '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');

        clickHandler = () => {
          app.tubes.setColors([randomHex(), randomHex(), randomHex()]);
          app.tubes.setLightsColors([randomHex(), randomHex(), randomHex(), randomHex()]);
        };
        heroEl?.addEventListener('click', clickHandler);
      } catch (err) {
        console.warn('Tubes background unavailable, using fallback.', err);
      }
    })();

    return () => {
      if (clickHandler) heroEl?.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <canvas ref={canvasRef} className="hero-canvas" />
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
