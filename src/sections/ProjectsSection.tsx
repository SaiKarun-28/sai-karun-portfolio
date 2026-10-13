import { portfolioProjects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="container projects-panel">
        <p className="section-kicker">Selected work</p>
        <h2>Projects</h2>
        <p className="section-intro">
          A collection of analytics, AI workflow, automation, and application projects. Each card represents one complete project.
        </p>
        <div className="projects-list projects-grid">
          {portfolioProjects.map((project, index) => (
            <article key={project.title} className="project-card project-card-complete">
              <div className="card-meta">Project {String(index + 1).padStart(2, '0')}</div>
              <h3>{project.title}</h3>
              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="technologies" aria-label={`Technologies used for ${project.title}`}>
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
