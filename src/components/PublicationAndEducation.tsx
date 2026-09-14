import { BookOpen, GraduationCap, Award, Trophy, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

export default function PublicationAndEducation() {
  return (
    <section className="section section-alt" id="academics">
      <div className="container">
        <div className="section-label">05. Research &amp; Academics</div>
        <h2 className="section-title !mb-4">Research, Education &amp; Honors</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Academic foundation, peer-reviewed research contribution in real-time distributed audio streaming,
          and hackathon accolades.
        </p>

        {/* ── Research Publication Spotlight ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
            <BookOpen size={16} />
            <span>Peer-Reviewed Publication</span>
          </div>

          <div className="publication-card relative overflow-hidden rounded-2xl border border-[var(--border-hover)] bg-[var(--bg-card)] p-6 md:p-8 shadow-xl shadow-[var(--hero-shadow)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-50" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30">
                    IJARETY Journal
                  </span>
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Impact Factor: 8.152
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition-all shadow-md shadow-[var(--accent-glow)]"
                  >
                    <ExternalLink size={14} />
                    View Live System
                  </a>
                  <a
                    href="https://github.com/Nandan-k-s-27/HearTogether"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                  >
                    Research Repository
                  </a>
                </div>
              </div>

              <div className="lg:w-72 shrink-0 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  Paper Highlights
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
                    <span>Zero Bluetooth / Hardware Dependency</span>
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
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              <GraduationCap size={16} />
              <span>Formal Education</span>
            </div>

            <div className="space-y-4">
              {/* MCA */}
              <div className="education-card p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                    2024 – 2026
                  </span>
                  <span className="cgpa-pill">CGPA: 8.88 / 10</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">
                  Master of Computer Applications (MCA)
                </h4>
                <p className="text-sm font-medium text-[var(--text-sec)] mt-1">
                  CMR Institute of Technology, Bengaluru
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  Key Coursework: Distributed Systems, Advanced Cloud Computing, Full-Stack Architectures, Data Structures &amp; Algorithms.
                </p>
              </div>

              {/* BCA */}
              <div className="education-card p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-hover)] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[var(--btn-glass)] text-[var(--text-sec)] border border-[var(--border)]">
                    2021 – 2024
                  </span>
                  <span className="cgpa-pill">CGPA: 7.93 / 10</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-sm font-medium text-[var(--text-sec)] mt-1">
                  Government First Grade College, Thirthahalli
                </p>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  Core Foundations: Object-Oriented Programming (Java/C++), Database Systems (SQL), Operating Systems, Software Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* ── Hackathons & Certifications ── */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              <Trophy size={16} />
              <span>Hackathons &amp; Honors</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 hover:border-[var(--border-hover)] transition-all">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                  <Trophy size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      1st Place Winner &bull; Hackathon
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-semibold">
                      CHAMPION
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-sec)] leading-relaxed">
                    Built a scalable full-stack E-Commerce platform using React (Vite), Node.js, Express, and MongoDB Atlas. Secured 1st position for responsive UI and backend data handling.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 hover:border-[var(--border-hover)] transition-all">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Sparkles size={18} />
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

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 hover:border-[var(--border-hover)] transition-all">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
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

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex items-start gap-3.5 hover:border-[var(--border-hover)] transition-all">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    Professional Certifications
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs px-2.5 py-1 rounded bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)]">
                      Java Programming (Beginner to Master) &bull; Udemy
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)]">
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

