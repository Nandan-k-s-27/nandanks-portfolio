import { useState } from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, ExternalLinkIcon } from './Icons';
import { Copy, Check, Send, Globe, MapPin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'nandanks016@gmail.com';

  const copyEmailToClipboard = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          setCopied(false);
        });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label">06 — Contact</div>
        <h2 className="section-title !mb-4">Get In Touch</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Whether you have an open software engineering role, a technical inquiry, or would like to discuss distributed systems and real-time architectures — feel free to reach out.
        </p>

        <div className="contact-wrapper">
          {/* Left Column: Direct Links */}
          <div className="contact-left">
            <p className="text-[var(--text-sec)] text-base mb-6 leading-relaxed">
              I am actively considering software development and cloud engineering positions. Connect directly via email or view my verified profiles:
            </p>

            <div className="contact-cards">
              {/* Email Card with Copy Option */}
              <div className="contact-card">
                <div className="contact-card-icon">
                  <EmailIcon className="w-5 h-5" />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">Primary Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="contact-card-value animated-link"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                    title="Send Email"
                    aria-label="Send Email"
                  >
                    <Send size={15} />
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/nandanks2003"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/nandanks2003</span>
                </div>
                <ExternalLinkIcon className="text-[var(--text-muted)] w-4 h-4" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/Nandan-k-s-27"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/Nandan-k-s-27</span>
                </div>
                <ExternalLinkIcon className="text-[var(--text-muted)] w-4 h-4" />
              </a>

              {/* Personal Domain Card */}
              <a
                href="https://nandanks.me"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <Globe size={20} />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">Personal Domain</span>
                  <span className="contact-card-value">nandanks.me</span>
                </div>
                <ExternalLinkIcon className="text-[var(--text-muted)] w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Statement & Callout */}
          <div className="contact-right">
            <div className="contact-callout">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  Availability &amp; Location
                </span>
                <p className="text-base text-[var(--text-sec)] leading-relaxed">
                  "Focused on building maintainable architecture, low-latency streaming pipelines, and clean user-facing systems."
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] space-y-3">
                <div className="flex items-center gap-2 text-sm text-[var(--text-primary)] font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>Available for Full-Time Software Engineering Roles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <MapPin size={14} className="text-[var(--accent)] shrink-0" />
                  <span>Based in Bengaluru, India &bull; Open to On-site, Hybrid &amp; Remote</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${email}?subject=Software%20Engineering%20Opportunity%20-%20Nandan%20K%20S`}
                  className="btn btn-primary w-full"
                >
                  <Send size={15} />
                  <span>Start a Conversation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
