import { useState, useRef, useEffect, type ReactNode } from 'react';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import { Video, Radio, Mic, Youtube } from 'lucide-react';
import TiltCard from './TiltCard';

interface ProjectLink {
  type: 'live' | 'github';
  label: string;
  url: string;
}

interface ProjectData {
  name: string;
  category: 'all' | 'realtime' | 'ai';
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
    badge: 'Real-Time / Gemini AI / MediaPipe',
    description:
      'AI-enhanced video conferencing platform featuring HD WebRTC peer-to-peer streaming, automated speech-to-text transcription, real-time meeting summaries via Google Gemini AI, and computer vision presence detection.',
    highlights: [
      'WebRTC P2P HD video and audio streaming with screen sharing & low-latency text chat',
      'Google Gemini AI integration for automated transcription and key takeaway extraction',
      'MediaPipe face detection tracks participant presence and generates missed conversation catch-up summaries',
      'Socket.IO signaling architecture with dynamic room orchestration',
    ],
    stack: ['React 18', 'WebRTC', 'Socket.IO', 'Node.js', 'MongoDB', 'Gemini AI', 'MediaPipe'],
    links: [
      { type: 'live', label: 'Live Demo', url: 'https://smartmeet-zeta.vercel.app' },
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/Nandan-k-s-27/smartmeet-ai-conference',
      },
    ],
    featured: true,
    icon: <Video size={22} />,
  },
  {
    name: 'HearTogether',
    category: 'realtime',
    badge: 'WebRTC / Redis Pub/Sub / Research Publication',
    description:
      'Real-time collaborative audio broadcasting platform enabling a single broadcaster to stream microphone or system audio to multiple listeners synchronously via a WebRTC mesh without hardware or Bluetooth limits.',
    highlights: [
      'Sub-second latency WebRTC P2P multi-listener audio distribution with STUN/TURN traversal',
      'Redis-backed session management, pub/sub messaging, and distributed rate limiting',
      'Google OAuth with JWT sessions, live emoji reactions, and synchronous host-listener chat',
      'Published academic paper in IJARETY Journal (Impact Factor: 8.152)',
    ],
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'WebRTC', 'Socket.IO', 'Redis', 'Node.js', 'Express'],
    links: [
      { type: 'live', label: 'Live Demo', url: 'https://hear-together-ten.vercel.app/' },
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/Nandan-k-s-27/HearTogether',
      },
    ],
    featured: true,
    icon: <Radio size={22} />,
  },
  {
    name: 'VARNA Voice Assistant',
    category: 'ai',
    badge: 'Python / Whisper STT / Multi-Stage NLP',
    description:
      'Fully offline Windows desktop voice assistant delivering 1–2s local response latency powered by OpenAI Whisper and a 4-tier NLP pipeline with sandboxed PowerShell safety architecture.',
    highlights: [
      '100% offline speech recognition — zero external network dependencies for complete privacy',
      'Multi-stage NLP resolution: Exact → Fuzzy → Phonetic → Semantic matching',
      '4-gate safety architecture with intent isolation preventing unauthorized command execution',
      'Controls 160+ system commands, window snapping, application launching, and macro recording',
    ],
    stack: ['Python', 'OpenAI Whisper', 'Vosk', 'NLP Pipeline', 'PowerShell', 'PyAutoGUI', 'Inno Setup'],
    links: [
      {
        type: 'live',
        label: 'Documentation',
        url: 'https://nandan-k-s-27.github.io/varna-voice-assistant',
      },
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/Nandan-k-s-27/varna-voice-assistant',
      },
    ],
    icon: <Mic size={22} />,
  },
  {
    name: 'YouTube AI Analyzer',
    category: 'ai',
    badge: 'Python / Gemini AI / Mermaid Mindmaps',
    description:
      'Video comprehension and analysis pipeline transforming YouTube videos into structured summaries, interactive Mermaid mind maps, and automated knowledge check quizzes using Google Gemini AI.',
    highlights: [
      'Configurable AI summary depth (10%–50%) with key insight extraction',
      'Automatic mind map generation rendered directly as interactive Mermaid diagrams',
      'Quiz generator with automated answer evaluation from transcript content',
      'Companion Chrome extension for direct one-click in-browser analysis',
    ],
    stack: ['Python', 'Flask', 'Google Gemini AI', 'yt-dlp', 'SQLite', 'Socket.IO', 'Mermaid.js'],
    links: [
      {
        type: 'github',
        label: 'Source Code',
        url: 'https://github.com/Nandan-k-s-27/youtube-ai-analyzer',
      },
    ],
    icon: <Youtube size={22} />,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'realtime' | 'ai'>('all');
  const filterGroupRef = useRef<HTMLDivElement>(null);
  const filterBtnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [filterPillStyle, setFilterPillStyle] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const updatePill = () => {
      const btn = filterBtnRefs.current.get(activeFilter);
      const container = filterGroupRef.current;
      if (!btn || !container) {
        setFilterPillStyle(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setFilterPillStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    };

    updatePill();
    window.addEventListener('resize', updatePill, { passive: true });
    return () => window.removeEventListener('resize', updatePill);
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">04 — Projects</div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="section-title !mb-2">Featured Systems &amp; Applications</h2>
            <p className="text-[var(--text-sec)] text-base max-w-2xl">
              Production architectures engineered from scratch — ranging from real-time WebRTC audio/video broadcasting to offline voice automation and AI analysis pipelines.
            </p>
          </div>

          {/* Filter Tabs with Spring Sliding Pill */}
          <div
            ref={filterGroupRef}
            className="project-filter-group relative flex items-center gap-1 p-1 rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] border border-[var(--border)] self-start md:self-auto max-w-full overflow-x-auto"
          >
            {filterPillStyle && (
              <span
                className="project-filter-pill"
                style={{
                  left: `${filterPillStyle.left}px`,
                  width: `${filterPillStyle.width}px`,
                }}
                aria-hidden="true"
              />
            )}
            <button
              ref={(el) => {
                if (el) filterBtnRefs.current.set('all', el);
                else filterBtnRefs.current.delete('all');
              }}
              onClick={() => setActiveFilter('all')}
              className={`relative z-10 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-colors shrink-0 ${
                activeFilter === 'all'
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              ref={(el) => {
                if (el) filterBtnRefs.current.set('realtime', el);
                else filterBtnRefs.current.delete('realtime');
              }}
              onClick={() => setActiveFilter('realtime')}
              className={`relative z-10 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-colors shrink-0 ${
                activeFilter === 'realtime'
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              Real-Time &amp; Media
            </button>
            <button
              ref={(el) => {
                if (el) filterBtnRefs.current.set('ai', el);
                else filterBtnRefs.current.delete('ai');
              }}
              onClick={() => setActiveFilter('ai')}
              className={`relative z-10 px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-colors shrink-0 ${
                activeFilter === 'ai'
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-sec)] hover:text-[var(--text-primary)]'
              }`}
            >
              AI &amp; Systems
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <TiltCard
              key={`${project.name}-${activeFilter}`}
              className="project-card animate-filter-in"
            >
              <div className="project-top">
                <div className="project-icon-wrap">{project.icon}</div>
                {project.featured && (
                  <span className="project-badge featured-badge">Featured System</span>
                )}
              </div>

              <div>
                <span className="text-xs font-semibold text-[var(--accent)] block mb-1">
                  {project.badge}
                </span>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-stack">
                {project.stack.map((s) => (
                  <span key={s} className="stack-tag">
                    {s}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} ${link.label}`}
                    className={`proj-link ${link.type === 'live' ? 'proj-live' : 'proj-github'}`}
                  >
                    {link.type === 'live' ? <ExternalLinkIcon /> : <GitHubIcon />}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
