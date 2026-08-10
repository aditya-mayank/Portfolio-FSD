import './Loader.css';

function Loader() {
  return (
    <div className="loader-overlay" role="status" aria-label="Loading content">
      <div className="loader-spinner" aria-hidden="true" />
      <p className="loader-text">Loading…</p>
    </div>
  );
}

export default Loader;
