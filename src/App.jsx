import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact  from './pages/Contact';
import NotFound from './pages/NotFound';

import projects from './data/projects';
import './App.css';


function App() {
  // Load theme from localStorage on initial render
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  const [skinColor, setSkinColor] = useState(() => {
    return localStorage.getItem('portfolio-color') || '#b66100';
  });

  // Save theme preferences to localStorage and update body class
  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  }, [isDark]);


  useEffect(() => {
    localStorage.setItem('portfolio-color', skinColor);
    document.documentElement.style.setProperty('--skin-color', skinColor);
  }, [skinColor]);

  function handleToggleTheme() {
    setIsDark(prev => !prev);
  }

  return (
    <BrowserRouter>
      <div className="app-layout">

        <Navbar 
          isDark={isDark} 
          onToggleTheme={handleToggleTheme} 
          skinColor={skinColor}
          onColorChange={setSkinColor}
        />

        {/* Main content area */}
        <div className="main-content">
          <main id="main-content">
            <Routes>
              {/* Redirect root to /home */}
              <Route path="/"        element={<Navigate to="/home" replace />} />

              {/* Core routes */}
              <Route path="/home"    element={<Home />} />
              <Route path="/about"   element={<About />} />


              <Route path="/projects" element={<Projects projects={projects} />} />

              {/* Dynamic route */}
              <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />

              <Route path="/contact" element={<Contact />} />

              {/* 404 catch-all */}
              <Route path="*"        element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
