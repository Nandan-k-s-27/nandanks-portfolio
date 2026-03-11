import type { ReactNode } from 'react';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ProjectLink {
  type: 'live' | 'github';
  label: string;
  url: string;
}

interface ProjectData {
  name: string;
  label: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  icon: ReactNode;
}

const PROJECTS: ProjectData[] = [
  {
    name: 'SmartMeet',
    label: 'Full-Stack \u00a0/\u00a0 AI \u00a0/\u00a0 Real-time',
    description:
      'AI-powered video conferencing platform with HD WebRTC video calls, real-time transcription, automated meeting summaries via Google Gemini AI, ML-based face detection for presence tracking, and live chat \u2014 all in one collaborative workspace.',
    highlights: [
      'WebRTC peer-to-peer HD video & audio + screen sharing',
      'Real-time Speech-to-Text transcription during meetings',
      'Auto-generated AI summaries & action-item extraction',
      'MediaPipe face detection \u2014 tracks missed conversations when away',
    ],
    stack: ['React 18', 'WebRTC', 'Socket.IO', 'Node.js', 'MongoDB', 'Gemini AI', 'MediaPipe'],
    links: [
      { type: 'live', label: 'Live Demo', url: 'https://smartmeet-zeta.vercel.app' },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/smartmeet-ai-conference',
      },
    ],
    featured: true,
    icon: (
      <svg
        className="project-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    name: 'HearTogether',
    label: 'Full-Stack \u00a0/\u00a0 Real-time \u00a0/\u00a0 Audio',
    description:
      'Real-time audio sharing web app \u2014 one host streams audio to multiple listeners simultaneously using WebRTC peer-to-peer. No Bluetooth, no hardware setup required. Just create a room, share the QR code, and everyone listens through their own headphones.',
    highlights: [
      'Instant 7-char room code + QR code sharing',
      'Browser Tab or Microphone audio capture modes',
      'Host controls: pause, resume, remove listeners',
      'Dark/Light theme with localStorage persistence',
    ],
    stack: ['React 18', 'Vite', 'TailwindCSS', 'WebRTC', 'Socket.IO', 'Node.js', 'Express'],
    links: [
      { type: 'live', label: 'Live Demo', url: 'https://hear-together-ten.vercel.app/' },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/HearTogether',
      },
    ],
    icon: (
      <svg
        className="project-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube AI Analyzer',
    label: 'AI \u00a0/\u00a0 Python \u00a0/\u00a0 NLP',
    description:
      'Converts any YouTube video into concise AI summaries, interactive Mermaid mind maps, and knowledge quizzes using Google Gemini AI. Features a Chrome extension, smart SQLite caching, and real-time processing updates.',
    highlights: [
      'AI summary with adjustable length (10%\u201350%)',
      'Mind map generation in Mermaid diagram format',
      'Auto-generated quiz from transcript content',
      'Chrome extension for instant in-browser analysis',
    ],
    stack: ['Python', 'Flask', 'Gemini AI', 'yt-dlp', 'SQLite', 'Socket.IO', 'Mermaid'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/youtube-ai-analyzer',
      },
    ],
    icon: (
      <svg
        className="project-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125a1.125 1.125 0 01.375-.841V5.625m0 0A1.125 1.125 0 014.5 4.5h15a1.125 1.125 0 011.125 1.125M20.625 19.375V5.625m0 13.75a1.125 1.125 0 01-1.125 1.125m1.125-1.125a1.125 1.125 0 00.375-.841V5.625m-1.5 0h-15M9 10.5l2.25 2.25 4.5-4.5"
        />
      </svg>
    ),
  },
  {
    name: 'VARNA Voice Assistant',
    label: 'Python \u00a0/\u00a0 NLP \u00a0/\u00a0 Desktop',
    description:
      'A fully offline, privacy-first Windows voice assistant powered by OpenAI Whisper STT and a 4-layer NLP pipeline (Exact \u2192 Fuzzy \u2192 Phonetic \u2192 Semantic). 160+ commands with no cloud dependency \u2014 your voice data never leaves your PC.',
    highlights: [
      '100% offline \u2014 no internet, no data collection',
      '4-layer NLP: Exact, Fuzzy, Phonetic & Semantic matching',
      '160+ commands: apps, windows, typing, search, macros',
      '4-gate safety system with command sandboxing',
    ],
    stack: ['Python', 'OpenAI Whisper', 'Vosk', 'NLP', 'PyAutoGUI', 'pyttsx3', 'PowerShell'],
    links: [
      {
        type: 'live',
        label: 'Live Page',
        url: 'https://nandan-k-s-27.github.io/varna-voice-assistant',
      },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/varna-voice-assistant',
      },
    ],
    icon: (
      <svg
        className="project-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">03. Projects</div>
        <h2 className="section-title">What I've Built</h2>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <article
              key={project.name}
              className={`relative h-full list-none rounded-[1.25rem] border-[0.75px] border-[var(--border)] p-2 md:rounded-[1.5rem] md:p-3 project-card glowing-card${project.featured ? ' featured' : ''}`}
              style={{ padding: '0.5rem', background: 'transparent', transition: 'transform 0.25s ease' }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border-[0.75px] border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm shadow-[0_4px_32px_rgba(0,0,0,.45)] transition-all hover:bg-[var(--bg-card-hover)] md:p-8" style={{ zIndex: 1 }}>
                <div className="project-top">
                  <div className="project-icon-wrap">{project.icon}</div>
                  {project.featured && (
                    <span className="project-badge featured-badge">Featured</span>
                  )}
                </div>
                <div className="project-label">{project.label}</div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map(s => (
                    <span key={s} className="stack-tag">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-auto">
                  {project.links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} ${link.label}`}
                      className={`proj-link ${link.type === 'live' ? 'proj-live' : 'proj-github'}`}
                    >
                      {link.type === 'live' ? <ExternalLinkIcon /> : <GitHubIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
