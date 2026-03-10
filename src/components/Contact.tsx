import { GitHubIcon, LinkedInIcon, ExternalLinkIcon } from './Icons';

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-label">04. Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-left">
            <p className="contact-intro">
              I'm currently open to new opportunities, collaborations, and interesting projects.
              Whether you have a question, an idea, or just want to say hi &mdash; my inbox is
              always open!
            </p>
            <div className="contact-cards">
              <a
                href="https://www.linkedin.com/in/nandanks2003"
                target="_blank"
                rel="noopener"
                className="contact-card"
              >
                <div className="contact-card-icon linkedin">
                  <LinkedInIcon />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/nandanks2003</span>
                </div>
                <ExternalLinkIcon className="contact-arrow" />
              </a>
              <a
                href="https://github.com/Nandan-k-s-27"
                target="_blank"
                rel="noopener"
                className="contact-card"
              >
                <div className="contact-card-icon github">
                  <GitHubIcon />
                </div>
                <div className="contact-card-body">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-value">github.com/Nandan-k-s-27</span>
                </div>
                <ExternalLinkIcon className="contact-arrow" />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-tagline">
              <p className="contact-quote">"Let's build something impactful together."</p>
              <p className="contact-availability">
                <span className="availability-dot" />
                Available for opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
