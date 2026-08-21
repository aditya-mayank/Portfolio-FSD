import { useParams, Link } from 'react-router-dom';
import TechBadge from '../components/TechBadge';
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="project-detail-section page-section" aria-labelledby="detail-heading">
        <div className="container">
          <div className="detail-not-found">
            <h2 id="detail-heading">Project Not Found</h2>
            <p>The project &quot;{projectId}&quot; doesn&apos;t exist in the portfolio.</p>
            <Link to="/projects" className="btn">← Back to Projects</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="project-detail-section page-section"
      id={`project-${project.id}`}
      aria-labelledby="detail-heading"
    >
      <div className="container">
        {}
        <Link to="/projects" className="back-link" aria-label="Back to all projects">
          <i className="fa fa-arrow-left" aria-hidden="true" />
          Back to Projects
        </Link>

        {}
        <img
          src={project.image}
          alt={`${project.title} — project screenshot`}
          className="detail-hero-img"
        />

        {}
        <div className="detail-header">
          <h1 id="detail-heading">{project.title}</h1>
          <span className="detail-category-badge">{project.category}</span>
        </div>

        {}
        <div className="detail-tech-section">
          <h3>Technologies Used</h3>
          <div className="detail-tech-list">
            {project.tech.map(t => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>
        </div>

        {}
        <div className="detail-desc-section">
          <h3>About this Project</h3>
          <p>{project.longDescription}</p>
        </div>

        {}
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
