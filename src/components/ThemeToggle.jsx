import './ThemeToggle.css';

/**
 * ThemeToggle — Receives isDark and onToggle props from Navbar (passed from App).
 * Demonstrates prop passing: App → Navbar → ThemeToggle
 */
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
