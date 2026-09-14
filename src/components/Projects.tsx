import { useState, type ReactNode } from 'react';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Video, Radio, Mic, Youtube } from 'lucide-react';

interface ProjectLink {
  type: 'live' | 'github';
  label: string;
  url: string;
}

interface ProjectData {
  name: string;
  category: 'all' | 'realtime' | 'ai' | 'fullstack';
  badge: string;
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
    category: 'realtime',
    badge: 'Real-Time \u00a0/\u00a0 Gemini AI \u00a0/\u00a0 MediaPipe',
    description:
      'AI-powered video conferencing platform with HD WebRTC peer-to-peer video calls, automated speech-to-text transcription, real-time meeting summaries via Google Gemini AI, and computer vision presence tracking.',
    highlights: [
      'WebRTC P2P HD video/audio streaming with screen sharing & live text chat',
      'Google Gemini AI integration for automated transcription & key point extraction',
      'MediaPipe face detection tracks presence & generates missed conversation catch-up summaries',
      'Socket.IO signaling server with responsive room management',
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
    icon: <Video className="project-icon" size={24} />,
  },
  {
    name: 'HearTogether',
    category: 'realtime',
    badge: 'WebRTC \u00a0/\u00a0 Redis Pub/Sub \u00a0/\u00a0 Research Publication',
    description:
      'Real-time collaborative audio broadcasting platform enabling a single host to stream microphone or system audio to multiple listeners synchronously via WebRTC mesh with zero Bluetooth hardware limitations.',
    highlights: [
      'Low-latency WebRTC P2P multi-listener audio distribution with STUN/TURN traversal',
      'Redis-backed session management, pub/sub messaging, and distributed rate limiting',
      'Google OAuth with JWT sessions, real-time emoji reactions, and live host-listener chat',
      'Published academic paper in IJARETY Journal (Impact Factor: 8.152)',
    ],
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'WebRTC', 'Socket.IO', 'Redis', 'Node.js', 'Express'],
    links: [
      { type: 'live', label: 'Live Demo', url: 'https://hear-together-ten.vercel.app/' },
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/HearTogether',
      },
    ],
    featured: true,
    icon: <Radio className="project-icon" size={24} />,
  },
  {
    name: 'VARNA Voice Assistant',
    category: 'ai',
    badge: 'Python \u00a0/\u00a0 Whisper STT \u00a0/\u00a0 Multi-Stage NLP',
    description:
      'Fully offline Windows desktop voice assistant delivering 1-2s local latency powered by OpenAI Whisper and a 4-tier NLP pipeline with sandbox PowerShell safety architecture and no cloud reliance.',
    highlights: [
      '100% offline speech recognition — zero external network dependencies for complete privacy',
      'Multi-stage NLP: Exact \u2192 Fuzzy \u2192 Phonetic \u2192 Semantic matching',
      '4-gate safety architecture with intent isolation preventing unauthorized actions',
      'Controls 160+ system commands, app management, window snapping, and custom macro recording',
    ],
    stack: ['Python', 'OpenAI Whisper', 'Vosk', 'NLP Pipeline', 'PowerShell', 'PyAutoGUI', 'Inno Setup'],
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
    icon: <Mic className="project-icon" size={24} />,
  },
  {
    name: 'YouTube AI Analyzer',
    category: 'ai',
    badge: 'Python \u00a0/\u00a0 Gemini AI \u00a0/\u00a0 Mermaid Mindmaps',
    description:
      'Intelligent video analysis pipeline transforming YouTube videos into concise AI summaries, interactive Mermaid mind maps, and automated knowledge check quizzes using Google Gemini AI.',
    highlights: [
      'Adjustable AI summary depth (10%\u201350%) with key takeaway extraction',
      'Automatic mind map generation rendered as interactive Mermaid diagrams',
      'Quiz generator with automated answer evaluation from transcript content',
      'Companion Chrome extension for direct one-click in-browser analysis',
    ],
    stack: ['Python', 'Flask', 'Google Gemini AI', 'yt-dlp', 'SQLite', 'Socket.IO', 'Mermaid.js'],
    links: [
      {
        type: 'github',
        label: 'GitHub',
        url: 'https://github.com/Nandan-k-s-27/youtube-ai-analyzer',
      },
    ],
    icon: <Youtube className="project-icon" size={24} />,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'realtime' | 'ai'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">04. Portfolio Projects</div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="section-title !mb-2">Featured Systems &amp; Applications</h2>
            <p className="text-[var(--text-sec)] text-base max-w-2xl">
              Architected and built from scratch — ranging from real-time WebRTC audio/video broadcasting
              to offline voice assistants and cloud-connected AI applications.
            </p>
          </div>

          {/* ── Category Filter Buttons ── */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--btn-glass)] border border-[var(--border)] self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('realtime')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'realtime'
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              Real-Time &amp; Media
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeFilter === 'ai'
                  ? 'bg-[var(--accent)] text-white shadow-sm'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              AI &amp; NLP
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article
              key={project.name}
              className={`relative h-full list-none rounded-[1.25rem] border-[0.75px] border-[var(--border)] p-2 md:rounded-[1.5rem] md:p-3 project-card glowing-card${
                project.featured ? ' featured' : ''
              }`}
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
              <div
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border-[0.75px] border-[var(--border)] bg-[var(--bg-card)] p-6 shadow-sm shadow-[0_4px_32px_rgba(0,0,0,.45)] transition-all hover:bg-[var(--bg-card-hover)] md:p-8"
                style={{ zIndex: 1 }}
              >
                <div className="project-top">
                  <div className="project-icon-wrap">{project.icon}</div>
                  {project.featured && (
                    <span className="project-badge featured-badge">Featured System</span>
                  )}
                </div>

                <div className="project-label">{project.badge}</div>
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

                <div className="project-links mt-auto pt-4 border-t border-[var(--border)]">
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
