export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">01. About Me</div>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-intro">
              I'm a <strong>passionate Full-Stack Developer</strong> and MCA student at{' '}
              <strong>CMR Institute of Technology, Bengaluru</strong>. I enjoy building scalable web
              applications and experimenting with AI-powered solutions that solve real-world
              problems.
            </p>
            <p>
              My technical stack spans{' '}
              <strong>JavaScript, React, Node.js, Python, Java, MongoDB,</strong> and
              <strong> MySQL</strong>. I focus on creating clean, user-centric applications while
              maintaining strong backend architecture and efficient data handling.
            </p>
            <p>
              I'm particularly interested in{' '}
              <strong>AI-integrated applications, real-time systems,</strong> and innovative software
              solutions that improve how people interact with technology.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Focus</span>
                <span className="detail-value">Full-Stack Dev &amp; AI-integrated Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
