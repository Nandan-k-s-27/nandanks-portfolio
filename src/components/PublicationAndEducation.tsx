import { BookOpen, GraduationCap, Award, Trophy, ExternalLink, CheckCircle } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function PublicationAndEducation() {
  return (
    <section className="section section-alt" id="academics">
      <div className="container">
        <div className="section-label">05 — Academics &amp; Research</div>
        <h2 className="section-title !mb-4">Research, Education &amp; Honors</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Academic foundation, peer-reviewed research in distributed audio streaming, and competitive hackathon achievements.
        </p>

        {/* ── Research Publication Spotlight ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            <BookOpen size={16} />
            <span>Peer-Reviewed Publication</span>
          </div>

          <div className="publication-card">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-semibold rounded-[var(--radius-sm)] bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)]">
                    IJARETY Journal
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-[var(--radius-sm)] bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                    Impact Factor: 8.152
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    Vol. 13, Issue 1 &bull; Jan–Feb 2026
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                  HearTogether: A WebRTC-Based Real-Time Audio Streaming Platform for Synchronous Multi-User Audio Distribution
                </h3>

                <p className="text-[var(--text-sec)] text-sm md:text-base leading-relaxed">
                  Published scientific research exploring low-latency audio broadcasting over browser-native WebRTC peer-to-peer mesh.
                  Addresses multi-listener hardware bottlenecks without Bluetooth or specialized receivers by combining Redis pub/sub signaling,
                  STUN/TURN ICE configurations, and sub-second synchronous multi-user audio delivery.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://hear-together-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-xs md:text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View Live System</span>
                  </a>
                  <a
                    href="https://github.com/Nandan-k-s-27/HearTogether"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-xs md:text-sm"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>Research Repository</span>
                  </a>
                </div>
              </div>

              <div className="lg:w-72 shrink-0 p-5 rounded-[var(--radius)] bg-[var(--bg-secondary)] border border-[var(--border)] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  Architectural Contributions
                </div>
                <ul className="space-y-2 text-xs text-[var(--text-sec)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Pure WebRTC P2P Audio Mesh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Redis Pub/Sub &amp; Session Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>Zero Hardware / Bluetooth Bottlenecks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>STUN/TURN NAT Traversal Resilience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Education & Academic Standing ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <GraduationCap size={16} />
              <span>Formal Education</span>
            </div>

            <div className="space-y-4">
              {/* MCA */}
              <div className="education-card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-[var(--radius-sm)] bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)]">
                    2024 – 2026
                  </span>
                  <span className="cgpa-pill">CGPA: 8.88 / 10</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">
                  Master of Computer Applications (MCA)
                </h4>
                <p className="text-sm font-semibold text-[var(--text-sec)] mt-0.5">
                  CMR Institute of Technology, Bengaluru
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  Key Coursework: Distributed Systems, Advanced Cloud Computing, Full-Stack Architectures, Data Structures &amp; Algorithms.
                </p>
              </div>

              {/* BCA */}
              <div className="education-card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-[var(--radius-sm)] bg-[var(--badge-bg)] text-[var(--text-sec)] border border-[var(--badge-border)]">
                    2021 – 2024
                  </span>
                  <span className="cgpa-pill">CGPA: 7.93 / 10</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-sm font-semibold text-[var(--text-sec)] mt-0.5">
                  Government First Grade College, Thirthahalli
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  Core Foundations: Object-Oriented Programming (Java/C++), Database Systems (SQL), Operating Systems, Software Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* ── Hackathons & Certifications ── */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
              <Trophy size={16} />
              <span>Hackathons &amp; Honors</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-[var(--radius-sm)] bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800/30 shrink-0 mt-0.5">
                  <Trophy size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      1st Place Winner &bull; Hackathon
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-[var(--radius-sm)] bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-semibold">
                      CHAMPION
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                    Built a scalable full-stack E-Commerce platform using React (Vite), Node.js, Express, and MongoDB Atlas. Secured 1st position for UI performance and clean API data flows.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-[var(--radius-sm)] bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/30 shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    MSME Hackathon &bull; College Round Qualifier
                  </span>
                  <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                    Advanced with project "Waste2Worth", focused on reducing carbon footprints through intelligent, sustainable waste management solutions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-[var(--radius-sm)] bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/30 shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Competitive Coding &amp; Hackathons
                  </span>
                  <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                    Participated in <strong>ByteBattle 2026</strong> (InfoTechiezz via Unstop) and <strong>Tata Elxsi's Teleport Season 3 Hackathon</strong> for collaborative algorithmic problem solving.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-[var(--radius-sm)] bg-purple-50 text-purple-600 border border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800/30 shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Professional Certifications
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium">
                      Java Programming &bull; Udemy
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] font-medium">
                      Machine Learning &bull; Infosys Springboard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
