import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechBadge from './TechBadge';
import './ProjectCard.css';


function ProjectCard({ id, title, description, longDescription, tech, image, link, category }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  function handleViewDetails() {
    navigate(`/projects/${id}`);
  }

  return (
    <article className="project-card">
      <div className="project-card-inner shadow-dark">
        {/* Project image with hover overlay */}
        <div className="project-img-wrap">
          <img src={image} alt={`${title} — project screenshot`} loading="lazy" />
          <div className="project-overlay">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon-btn"
              aria-label={`View ${title} on GitHub`}
              title="View on GitHub"
              onClick={e => e.stopPropagation()}
            >
              <i className="fab fa-github" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Card body */}
        <div className="project-card-body">
          <span className="project-card-category">{category}</span>
          <h3>{title}</h3>
          <p className="project-card-desc">{description}</p>

          {/* Tech badges */}
          <div className="project-tech-list" aria-label="Technologies used">
            {tech.map(t => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>

          {/* "View details" button */}
          <button
            id={`details-toggle-${id}`}
            className="project-details-toggle"
            onClick={() => setExpanded(prev => !prev)}
            aria-expanded={expanded}
            aria-controls={`details-${id}`}
          >
            {expanded ? 'Hide details' : 'View details'}
            <i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} aria-hidden="true" />
          </button>

          {expanded && (
            <p id={`details-${id}`} className="project-expanded-desc">
              {longDescription}
            </p>
          )}

          {/* Card actions */}
          <div className="project-card-actions">
            <button
              id={`full-detail-${id}`}
              className="btn"
              onClick={handleViewDetails}
              aria-label={`View full details for ${title}`}
            >
              Full Details
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label={`View ${title} on GitHub`}
            >
              <i className="fab fa-github" aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
