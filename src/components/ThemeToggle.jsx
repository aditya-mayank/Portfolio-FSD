import './ThemeToggle.css';

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      id="theme-toggle-btn"
      className="theme-toggle-btn"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
