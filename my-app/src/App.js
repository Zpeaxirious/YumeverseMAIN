import React, { useState } from 'react';
import { FaSteam, FaGamepad, FaDiscord, FaBars } from 'react-icons/fa';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';

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
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#support" onClick={() => setIsMenuOpen(false)}>Support</a>
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

      <br></br>

      <section className="about" id="about">
        <h2>About Us</h2>
      </section>

      <section className="support" id="support">
        <h2>Support Us</h2>
      </section>

      {/* Vercel */}
      <SpeedInsights/>
      <Analytics/>

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