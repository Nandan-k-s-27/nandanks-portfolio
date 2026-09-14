import { Cpu, Cloud, Radio, ShieldCheck, Mail, MapPin, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">01. About Me</div>
        <h2 className="section-title !mb-4">Engineering Profile &amp; Background</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Passionate software engineer focused on building resilient distributed systems, real-time multimedia architectures, and enterprise cloud data pipelines.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-[var(--text-sec)] leading-relaxed">
            <p className="text-[var(--text-primary)] text-lg font-medium">
              I am a <strong>Software Developer</strong> and MCA student at{' '}
              <strong className="text-[var(--accent)]">CMR Institute of Technology, Bengaluru</strong> (CGPA: 8.88),
              with hands-on industry experience crafting high-performance, production-ready systems.
            </p>

            <p>
              My expertise spans <strong>modern full-stack web development</strong> (React, TypeScript, Node.js, Express),
              <strong> low-latency real-time systems</strong> (WebRTC peer-to-peer delivery, Socket.IO, Redis Pub/Sub),
              and <strong>cloud data engineering</strong> using Azure Data Factory, Azure Databricks, and Delta Lake.
            </p>

            <p>
              Beyond traditional software engineering, I actively explore <strong>applied AI &amp; NLP pipelines</strong> —
              from deploying offline voice assistants with OpenAI Whisper and multi-stage phonetic matching, to integrating
              Google Gemini AI and MediaPipe for computer vision and conversational intelligence.
            </p>

            <p>
              I am also a <strong>published researcher</strong> in distributed real-time audio distribution, having authored
              a paper in <em>IJARETY</em> (Impact Factor: 8.152) detailing WebRTC mesh synchronization algorithms.
            </p>

            {/* Architecture Highlights Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3">
                <Radio className="text-[var(--accent)] shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Real-Time &amp; Media</div>
                  <div className="text-[11px] text-[var(--text-muted)]">WebRTC P2P &bull; Socket.IO &bull; Redis Pub/Sub</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3">
                <Cloud className="text-[var(--accent)] shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Cloud Data Engineering</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Azure ADF &bull; Databricks &bull; Delta Lake</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3">
                <Cpu className="text-[var(--accent)] shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Applied AI &amp; NLP</div>
                  <div className="text-[11px] text-[var(--text-muted)]">OpenAI Whisper &bull; Gemini AI &bull; MediaPipe</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3">
                <ShieldCheck className="text-[var(--accent)] shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Enterprise Security</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Azure RBAC &bull; Key Vault &bull; JWT Auth</div>
                </div>
              </div>
            </div>
          </div>

          {/* IT Quick Specs / Info Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] shadow-lg shadow-[var(--hero-shadow)]">
            <div className="flex items-center gap-2 pb-4 border-b border-[var(--border)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              <Terminal size={15} />
              <span>Developer Specifications</span>
            </div>

            <div className="divide-y divide-[var(--border)] text-sm">
              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Name</span>
                <span className="font-semibold text-[var(--text-primary)]">Nandan K S</span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Location</span>
                <span className="inline-flex items-center gap-1 text-[var(--text-sec)]">
                  <MapPin size={13} className="text-[var(--accent)]" /> Bengaluru, Karnataka, IN
                </span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Education</span>
                <span className="text-[var(--text-sec)] text-right">
                  MCA (CGPA: 8.88) &bull; CMRIT<br />
                  <span className="text-xs text-[var(--text-muted)]">BCA (CGPA: 7.93) &bull; GFGC</span>
                </span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Current Internship</span>
                <span className="text-right text-[var(--text-sec)]">
                  Bandhan Technologies<br />
                  <span className="text-xs text-[var(--accent)] font-mono">Cloud Data Engineering</span>
                </span>
              </div>

              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Primary Email</span>
                <a
                  href="mailto:nandanks016@gmail.com"
                  className="font-mono text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <Mail size={12} /> nandanks016@gmail.com
                </a>
              </div>

              <div className="py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">Availability</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Opportunities
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--text-muted)]">Public Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Nandan-k-s-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-sec)] hover:text-[var(--accent)] transition-colors"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandanks2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-sec)] hover:text-[var(--accent)] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
