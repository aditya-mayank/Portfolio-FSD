import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects. Please try again later.');
        setIsLoading(false);
      });
  }, []);

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

        {isLoading && (
          <div className="row">
            <div className="padd-15">
              <p>Loading projects...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="padd-15">
              <p className="error-message" style={{ color: 'red' }}>{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && (
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
        )}
      </div>
    </section>
  );
}

export default Projects;
