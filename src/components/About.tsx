import { Radio, Cloud, Cpu, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-label">01 — About</div>
        <h2 className="section-title !mb-4">Engineering Profile &amp; Background</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Software engineer focused on resilient distributed architectures, real-time multimedia delivery, and enterprise cloud data pipelines.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-[var(--text-sec)] leading-relaxed">
            <p className="text-[var(--text-primary)] text-lg font-medium">
              I am a <strong>Software Developer</strong> and final-year MCA candidate at{' '}
              <strong className="text-[var(--text-primary)]">CMR Institute of Technology, Bengaluru</strong> (CGPA: 8.88),
              with hands-on industry experience engineering high-performance systems.
            </p>

            <p>
              My background focuses on <strong>modern full-stack web applications</strong> (React, TypeScript, Node.js, Express),
              <strong> low-latency distributed streaming</strong> (WebRTC peer-to-peer delivery, Socket.IO, Redis Pub/Sub),
              and <strong>cloud data engineering</strong> using Azure Data Factory, Azure Databricks, and Delta Lake.
            </p>

            <p>
              Beyond core web services, I have implemented <strong>applied AI &amp; NLP systems</strong> — ranging from
              offline desktop voice automation with OpenAI Whisper and multi-stage phonetic matching, to integrating
              Google Gemini AI and MediaPipe for computer vision presence tracking and automated transcript analysis.
            </p>

            <p>
              I am also a <strong>published researcher</strong> in real-time audio distribution, having authored a paper
              in <em>IJARETY</em> (Impact Factor: 8.152) presenting a WebRTC mesh architecture for synchronous multi-user audio delivery without specialized hardware.
            </p>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="pillar-card">
                <Radio className="pillar-icon" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Real-Time &amp; Media</div>
                  <div className="text-[11px] text-[var(--text-muted)]">WebRTC Mesh &bull; Socket.IO &bull; Redis Pub/Sub</div>
                </div>
              </div>

              <div className="pillar-card">
                <Cloud className="pillar-icon" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Cloud Data Engineering</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Azure ADF &bull; Databricks &bull; Delta Lake</div>
                </div>
              </div>

              <div className="pillar-card">
                <Cpu className="pillar-icon" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Applied AI &amp; NLP</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Whisper &bull; Gemini AI &bull; MediaPipe</div>
                </div>
              </div>

              <div className="pillar-card">
                <ShieldCheck className="pillar-icon" size={18} />
                <div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">Enterprise Security</div>
                  <div className="text-[11px] text-[var(--text-muted)]">Azure RBAC &bull; Key Vault &bull; JWT Auth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Overview Card */}
          <div className="lg:col-span-5 profile-card">
            <div className="pb-3 border-b border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Profile At A Glance
              </span>
            </div>

            <div className="divide-y divide-[var(--border)]">
              <div className="spec-row">
                <span className="spec-label">Name</span>
                <span className="spec-value">Nandan K S</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Location</span>
                <span className="spec-value inline-flex items-center gap-1">
                  <MapPin size={13} className="text-[var(--text-muted)]" /> Bengaluru, Karnataka, IN
                </span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Education</span>
                <div className="spec-value">
                  MCA (8.88 CGPA) &bull; CMRIT<br />
                  <span className="text-xs text-[var(--text-muted)]">BCA (7.93 CGPA) &bull; GFGC</span>
                </div>
              </div>

              <div className="spec-row">
                <span className="spec-label">Current Role</span>
                <div className="spec-value">
                  Bandhan Technologies<br />
                  <span className="text-xs text-[var(--accent)] font-medium">Cloud Data Engineering Intern</span>
                </div>
              </div>

              <div className="spec-row">
                <span className="spec-label">Email</span>
                <a
                  href="mailto:nandanks016@gmail.com"
                  className="spec-value text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <Mail size={12} /> nandanks016@gmail.com
                </a>
              </div>

              <div className="spec-row">
                <span className="spec-label">Availability</span>
                <span className="spec-value inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Open to Opportunities
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Nandan-k-s-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-sec)] hover:text-[var(--text-primary)] transition-colors"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandanks2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-sec)] hover:text-[var(--text-primary)] transition-colors"
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
