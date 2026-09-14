import type { ReactNode } from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Code, Layout, Server, Cloud, Cpu, Database } from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  tagClass: string;
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan';
  icon: ReactNode;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming & scripting syntax',
    tagClass: 'lang',
    glowColor: 'blue',
    icon: <Code size={22} />,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend Engineering',
    subtitle: 'Responsive, reactive & accessible UIs',
    tagClass: 'fe',
    glowColor: 'purple',
    icon: <Layout size={22} />,
    skills: ['React 18', 'Vite', 'Tailwind CSS', 'Web Audio API', 'View Transitions', 'Component Design', 'PWA'],
  },
  {
    title: 'Backend & Real-Time',
    subtitle: 'Low-latency streams & scalable APIs',
    tagClass: 'be',
    glowColor: 'green',
    icon: <Server size={22} />,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'WebRTC (P2P Mesh)',
      'Socket.IO',
      'Redis (Pub/Sub & Sessions)',
      'Distributed Rate Limiting',
    ],
  },
  {
    title: 'Cloud & Data Engineering',
    subtitle: 'Azure enterprise data warehouse & pipelines',
    tagClass: 'cloud',
    glowColor: 'cyan',
    icon: <Cloud size={22} />,
    skills: [
      'Azure Data Factory (ADF)',
      'Azure Databricks',
      'ADLS Gen2',
      'Delta Lake',
      'Apache Parquet',
      'Bronze Layer Architecture',
      'Azure Key Vault',
      'Azure Monitor',
      'Azure RBAC',
    ],
  },
  {
    title: 'AI, ML & NLP Pipelines',
    subtitle: 'Intelligent automation & speech/vision models',
    tagClass: 'ai',
    glowColor: 'red',
    icon: <Cpu size={22} />,
    skills: [
      'Google Gemini AI',
      'OpenAI Whisper',
      'Sentence Transformers',
      'MediaPipe Face Detection',
      'NLP Multi-Stage Pipelines',
      'Fuzzy & Phonetic Matching',
      'Vosk STT',
    ],
  },
  {
    title: 'Databases & DevOps',
    subtitle: 'Data persistence & automated deployment',
    tagClass: 'tools',
    glowColor: 'orange',
    icon: <Database size={22} />,
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
        <div className="section-label">03. Technical Toolkit</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="section-title !mb-2">Skills &amp; Technologies</h2>
            <p className="text-[var(--text-sec)] text-base max-w-2xl">
              A comprehensive breakdown of languages, frameworks, cloud services, and architectures
              I use to build production systems.
            </p>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] bg-[var(--btn-glass)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
            30+ Production Technologies
          </div>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map(cat => (
            <GlowCard
              key={cat.title}
              customSize
              glowColor={cat.glowColor}
              className="gap-4 skill-card"
            >
              <div className="flex items-center justify-between">
                <div className="skill-card-icon">{cat.icon}</div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                  Stack Area
                </span>
              </div>
              <h3 className="skill-card-title !mb-1">{cat.title}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">{cat.subtitle}</p>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className={`skill-tag ${cat.tagClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
