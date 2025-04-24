import React, { useState } from 'react';
import { FaSteam, FaGamepad, FaDiscord, FaBars } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Temporary Notice Banner */}
      <div className="temporary-notice">
        🚧 Exciting things are coming! This is a temporary preview 🚧
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="yume">YUME</span><span className="verse">VERSE</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Support</a>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Creating universes beyond time</h1>
          <button className="cta-button">Explore Our Universe</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="social-links">
          {/* <a href="#"><FaSteam className="icon" /></a> */}
          <a href="https://discord.com/invite/Ey9JbZrwQ8/" target="_blank" rel="noreferrer"><FaDiscord className="icon" /></a>
          {/* <a href="#"><FaGamepad className="icon" /></a> */}
        </div>
        <div className="footer-info">
          <span>© 2025 YumeVerse</span>
          {/* <span>Terms of Service</span>
          <span>Privacy Policy</span> */}
        </div>
      </footer>
    </div>
  );
};

export default App;