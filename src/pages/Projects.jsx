import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects({ projects }) {
  return (
    <section
      className="projects-section page-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 id="projects-heading">Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="projects-intro padd-15">
            <h2>My Latest Projects :</h2>
          </div>
        </div>

        {}
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              tech={project.tech}
              image={project.image}
              link={project.link}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
