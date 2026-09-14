import { useState } from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, ExternalLinkIcon } from './Icons';
import { Copy, Check, Send, Globe, MapPin, Terminal } from 'lucide-react';

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
          // Fallback if permission blocked
          setCopied(false);
        });
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-label">06. Contact</div>
        <h2 className="section-title !mb-4">Get In Touch</h2>
        <p className="text-[var(--text-sec)] text-base max-w-2xl mb-12">
          Whether you have an open software engineering role, a technical collaboration inquiry,
          or just want to connect — my inbox is always open.
        </p>

        <div className="contact-wrapper">
          <div className="contact-left">
            <p className="contact-intro">
              I am actively seeking software development and cloud engineering opportunities. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>

            <div className="contact-cards">
              {/* Email Card with Copy Option */}
              <div className="contact-card group">
                <div className="contact-card-icon email">
                  <EmailIcon />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">Primary Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="contact-card-value hover:text-[var(--accent)] transition-colors font-mono"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="p-2 rounded-lg bg-[var(--btn-glass)] border border-[var(--border)] text-[var(--text-sec)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                    title="Send Email"
                    aria-label="Send Email"
                  >
                    <Send size={16} />
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
                <div className="contact-card-icon linkedin">
                  <LinkedInIcon />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">LinkedIn Profile</span>
                  <span className="contact-card-value font-mono">linkedin.com/in/nandanks2003</span>
                </div>
                <ExternalLinkIcon className="contact-arrow" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/Nandan-k-s-27"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon github">
                  <GitHubIcon />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">GitHub Repository</span>
                  <span className="contact-card-value font-mono">github.com/Nandan-k-s-27</span>
                </div>
                <ExternalLinkIcon className="contact-arrow" />
              </a>

              {/* Web Portfolio Card */}
              <a
                href="https://nandanks.me"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon" style={{ background: 'rgba(99,102,241,0.15)', color: 'var(--accent)' }}>
                  <Globe size={22} />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">Personal Domain</span>
                  <span className="contact-card-value font-mono">nandanks.me</span>
                </div>
                <ExternalLinkIcon className="contact-arrow" />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-tagline">
              <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider text-[var(--accent)] uppercase mb-2">
                <Terminal size={14} />
                <span>Console Log</span>
              </div>
              <p className="contact-quote">
                "Driven by scalable architecture, clean code, and solving challenging engineering problems."
              </p>
              
              <div className="pt-4 border-t border-[var(--border)]/50 space-y-3">
                <div className="contact-availability">
                  <span className="availability-dot" />
                  <span>Available for Full-Time Roles &amp; Internships</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                  <MapPin size={13} className="text-[var(--accent)]" />
                  <span>Based in Bengaluru, India &bull; Open to Remote</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${email}?subject=Opportunity%20Discussion%20-%20Nandan%20K%20S`}
                  className="btn btn-primary w-full justify-center"
                >
                  <Send size={15} />
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
