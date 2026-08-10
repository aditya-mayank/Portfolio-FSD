import './TechBadge.css';

/**
 * TechBadge — Great-grandchild component (prop drilling level 4 in ProjectCard tree).
 * App → Projects → ProjectCard → TechBadge
 * Receives: tech (string) — a single technology name
 */
function TechBadge({ tech }) {
  return <span className="tech-badge">{tech}</span>;
}

export default TechBadge;
