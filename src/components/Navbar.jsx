import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import StyleSwitcher from './StyleSwitcher';
import './Navbar.css';


function Navbar({ isDark, onToggleTheme, skinColor, onColorChange }) {
  const [navOpen, setNavOpen] = useState(false);

  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1199 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, [navOpen]);

  function closeNav() {
    if (window.innerWidth <= 1199) {
      setNavOpen(false);
    }
  }

  const navLinks = [
    { to: '/home',     icon: 'fa fa-home',      label: 'Home'     },
    { to: '/about',    icon: 'fa fa-user',       label: 'About'    },
    { to: '/projects', icon: 'fa fa-briefcase',  label: 'Projects' },
    { to: '/contact',  icon: 'fa fa-comments',   label: 'Contact'  },
  ];

  return (
    <>
      {}
      <button
        className={`nav-toggler${navOpen ? ' open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={navOpen}
        aria-controls="primary-nav"
        onClick={() => setNavOpen(prev => !prev)}
      >
        <span aria-hidden="true" />
      </button>

      {}
      <div className="theme-toggles-wrap">
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        <StyleSwitcher skinColor={skinColor} onColorChange={onColorChange} />
      </div>

      {}
      <header className={`navbar${navOpen ? ' open' : ''}`} role="banner">
        {}
        <div className="navbar-logo">
          <NavLink to="/home" aria-label="Aditya Mayank — Home" onClick={closeNav}>
            <span>A</span>ditya
          </NavLink>
        </div>



        {}
        <nav id="primary-nav" className="navbar-nav" aria-label="Primary navigation">
          <ul>
            {navLinks.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeNav}
                >
                  <i className={icon} aria-hidden="true" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {}
        <div className="navbar-social">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a href="https://github.com/aditya-mayank/" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/adityamayank" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <i className="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/aditya__mayank/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
            <a href="mailto:adityamayank11@gmail.com" title="Email" aria-label="Email me">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
