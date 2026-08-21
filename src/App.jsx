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
  
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  const [skinColor, setSkinColor] = useState(() => {
    return localStorage.getItem('portfolio-color') || '#b66100';
  });

  
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

        {}
        <div className="main-content">
          <main id="main-content">
            <Routes>
              {}
              <Route path="/"        element={<Navigate to="/home" replace />} />

              {}
              <Route path="/home"    element={<Home />} />
              <Route path="/about"   element={<About />} />


              <Route path="/projects" element={<Projects projects={projects} />} />

              {}
              <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />

              <Route path="/contact" element={<Contact />} />

              {}
              <Route path="*"        element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
