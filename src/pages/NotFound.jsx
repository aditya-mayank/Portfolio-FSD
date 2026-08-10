import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section
      className="not-found-section page-section"
      aria-labelledby="notfound-heading"
    >
      <div className="container">
        <div className="not-found-inner">
          <div className="not-found-code" aria-hidden="true">404</div>
          <h1 id="notfound-heading">Page Not Found</h1>
          <p>
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved
            or the URL might be wrong.
          </p>
          <Link to="/home" className="btn" id="go-home-btn">
            <i className="fa fa-home" aria-hidden="true" style={{ marginRight: '8px' }} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
