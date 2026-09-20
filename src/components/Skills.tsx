import type { ReactNode } from 'react';
import { Code, Layout, Server, Cloud, Cpu, Database } from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming & scripting syntax',
    icon: <Code size={20} />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Engineering',
    subtitle: 'Reactive, accessible & high-performance interfaces',
    icon: <Layout size={20} />,
    skills: ['React 18', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Component Systems', 'Progressive Web Apps'],
  },
  {
    title: 'Backend & Distributed Systems',
    subtitle: 'Low-latency APIs & streaming communication',
    icon: <Server size={20} />,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'WebRTC (P2P Mesh)',
      'Socket.IO',
      'Redis (Pub/Sub)',
      'Rate Limiting',
    ],
  },
  {
    title: 'Cloud & Data Engineering',
    subtitle: 'Enterprise data warehouse pipelines on Azure',
    icon: <Cloud size={20} />,
    skills: [
      'Azure Data Factory (ADF)',
      'Azure Databricks',
      'ADLS Gen2',
      'Delta Lake',
      'Apache Parquet',
      'Bronze/Silver Layer Architecture',
      'Azure Key Vault',
      'Azure Monitor',
      'Azure RBAC',
    ],
  },
  {
    title: 'Applied AI & NLP Pipelines',
    subtitle: 'Local speech recognition, vision models & LLM integration',
    icon: <Cpu size={20} />,
    skills: [
      'Google Gemini AI',
      'OpenAI Whisper',
      'Sentence Transformers',
      'MediaPipe Face Detection',
      'Multi-Stage NLP Pipelines',
      'Phonetic & Fuzzy Matching',
      'Vosk STT',
    ],
  },
  {
    title: 'Databases & Developer Tooling',
    subtitle: 'Data persistence, orchestration & CI/CD workflows',
    icon: <Database size={20} />,
    skills: [
      'MongoDB Atlas',
      'MySQL',
      'Redis',
      'Git & GitHub',
      'VS Code',
      'Vercel',
      'Render',
      'Inno Setup',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-label">03 — Toolkit</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title !mb-2">Skills &amp; Technologies</h2>
            <p className="text-[var(--text-sec)] text-base max-w-2xl">
              A comprehensive breakdown of languages, frameworks, cloud services, and architectures I use to build production systems.
            </p>
          </div>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-sec)] self-start md:self-auto shadow-sm">
            30+ Core Technologies
          </div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="skill-card">
              <div className="flex items-center justify-between mb-3">
                <div className="skill-card-icon">{cat.icon}</div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Area
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                {cat.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-5">
                {cat.subtitle}
              </p>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
