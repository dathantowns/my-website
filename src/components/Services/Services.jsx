import "./Services.css";

function Services() {
  const projects = [
    {
      title: "SATI AI Lecture Mentor",
      description:
        "A full-stack application that leverages AI to provide personalized lecture assistance and mentorship to educators.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🎓",
      demoLink: "https://satimentor.crabdance.com",
      codeLink: "https://github.com/dathantowns/SATIAI.git",
    },
    {
      title: "WTWR",
      description:
        "A full-stack weather application that displays current conditions and appropriate clothing recommendations using external APIs.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🌤️",
      demoLink: "https://wtwrwtwr.crabdance.com",
      codeLink: "https://github.com/dathantowns/WTWR.git",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing projects and skills (this website!).",
      technologies: ["React", "Vite", "CSS3"],
      image: "💼",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <div className="services-container">
      <h2>My Projects</h2>
      <p className="services-intro">
        Here are some of the projects I've worked on. Each project represents my
        growth as a developer and my passion for creating meaningful
        applications.
      </p>
      <div className="services-grid">
        {projects.map((project, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} className="project-link demo-link">
                Live Demo
              </a>
              <a href={project.codeLink} className="project-link code-link">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
