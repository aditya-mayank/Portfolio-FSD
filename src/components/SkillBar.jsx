import './SkillBar.css';

/**
 * SkillBar — Grandchild component (prop drilling level 3).
 * About (page) → skills array prop → SkillList (inline) → SkillBar
 * Receives: name (string), percent (number)
 */
function SkillBar({ name, percent }) {
  return (
    <div className="skill-bar-wrap">
      <h5>{name}</h5>
      <div className="skill-progress">
        <div
          className="skill-progress-in"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${percent}%`}
        />
        <div className="skill-percent-label">{percent}%</div>
      </div>
    </div>
  );
}

export default SkillBar;
