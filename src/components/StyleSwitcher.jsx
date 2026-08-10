import { useState, useRef, useEffect } from 'react';
import './StyleSwitcher.css';

const COLORS = [
  { hex: '#b66100', name: 'Brown' },
  { hex: '#e02f6b', name: 'Pink' },
  { hex: '#1a82d4', name: 'Blue' },
  { hex: '#16a085', name: 'Teal' },
  { hex: '#8e44ad', name: 'Purple' }
];

function StyleSwitcher({ skinColor, onColorChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  // Close the switcher when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [switcherRef]);

  return (
    <div className="style-switcher" ref={switcherRef}>
      <button 
        className="style-switcher-toggler" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle style switcher"
        title="Theme Colors"
      >
        <i className="fas fa-cog" aria-hidden="true" />
      </button>

      <div className={`style-switcher-popup ${isOpen ? 'open' : ''}`}>
        <h4>Theme Colors</h4>
        <div className="colors">
          {COLORS.map((color) => (
            <button
              key={color.hex}
              className={`color-btn ${skinColor === color.hex ? 'active' : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => {
                onColorChange(color.hex);
                setIsOpen(false);
              }}
              aria-label={`Set theme color to ${color.name}`}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StyleSwitcher;
