import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TechBadge from '../components/TechBadge';
import './ProjectDetail.css';

function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectId}`)
      .then(response => {
        if (response.status === 404) {
          throw new Error('Project not found');
        }
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        return response.json();
      })
      .then(data => {
        setProject(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching project:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [projectId]);

  if (isLoading) {
    return (
      <section className="project-detail-section page-section">
        <div className="container">
          <div className="detail-not-found">
            <h2>Loading project details...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="project-detail-section page-section" aria-labelledby="detail-heading">
        <div className="container">
          <div className="detail-not-found">
            <h2 id="detail-heading" style={{ color: error === 'Project not found' ? 'inherit' : 'red' }}>
              {error === 'Project not found' ? 'Project Not Found' : 'Error Loading Project'}
            </h2>
            <p>
              {error === 'Project not found' 
                ? `The project "${projectId}" doesn't exist in the portfolio.`
                : 'There was a problem communicating with the server. Please try again later.'}
            </p>
            <Link to="/projects" className="btn">← Back to Projects</Link>
          </div>
        </div>
      </section>
    );
  }

  if (!project) return null;

  return (
    <section
      className="project-detail-section page-section"
      id={`project-${project.id}`}
      aria-labelledby="detail-heading"
    >
      <div className="container">
        {/* Back Link */}
        <Link to="/projects" className="back-link" aria-label="Back to all projects">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <img
          src={project.image}
          alt={`${project.title} — project screenshot`}
          className="detail-hero-img"
        />

        {/* Header */}
        <div className="detail-header">
          <h1 id="detail-heading">{project.title}</h1>
          <span className="detail-category-badge">{project.category}</span>
        </div>

        {/* Tech Stack */}
        <div className="detail-tech-section">
          <h3>Technologies Used</h3>
          <div className="detail-tech-list">
            {project.tech.map(t => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="detail-desc-section">
          <h3>About this Project</h3>
          <p>{project.longDescription}</p>
        </div>

        {/* Actions */}
        <div className="detail-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            aria-label={`View ${project.title} on GitHub`}
          >
            <i className="fab fa-github" aria-hidden="true" style={{ marginRight: '8px' }} />
            View on GitHub
          </a>
          <Link to="/projects" className="btn btn-outline">
            ← All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
