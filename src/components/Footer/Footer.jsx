import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2>Let's Connect!</h2>
        <p>
          I'm always interested in discussing new opportunities and projects.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:dathantowns@gmail.com">dathantowns@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <a href="tel:+6616334953">(661) 633-4953</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Bakersfield, CA</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/dathantowns" className="social-link">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dathan-towns"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Developed by Day. Built with React & a little elbow
            grease
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
