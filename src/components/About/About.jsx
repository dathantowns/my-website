import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate junior software developer with a strong foundation in
          modern web technologies. I love the challenge of turning ideas into
          functional, beautiful applications and am always eager to learn new
          technologies and best practices.
        </p>
        <div className="about-features">
          <div className="feature">
            <h3>Frontend Development</h3>
            <p>
              Proficient in React, JavaScript, HTML5, CSS3, and responsive
              design principles.
            </p>
          </div>
          <div className="feature">
            <h3>Back-end Development</h3>
            <p>
              Proficient in Node.js, Express, MongoDB, and RESTful API design.
            </p>
          </div>
          <div className="feature">
            <h3>Problem Solving</h3>
            <p>
              Enjoy tackling complex challenges and finding elegant solutions
              through code.
            </p>
          </div>
          <div className="feature">
            <h3>Continuous Learning</h3>
            <p>
              Always exploring new technologies and staying up-to-date with
              industry trends.
            </p>
          </div>
        </div>
        <div className="tech-stack">
          <h3>Technologies I Work With</h3>
          <div className="tech-grid">
            <span className="tech-item">React</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">HTML5</span>
            <span className="tech-item">CSS3</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">Git</span>
            <span className="tech-item">MongoDB</span>
            <span className="tech-item">Express</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
