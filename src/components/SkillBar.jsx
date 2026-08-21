import './SkillBar.css';

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
