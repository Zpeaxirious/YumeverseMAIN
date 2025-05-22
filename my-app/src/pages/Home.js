import React, { useState } from 'react';
import { FaSteam, FaGamepad, FaDiscord} from 'react-icons/fa';
import '../App.css';
import Navigation from '../components/Navigation';

import { Analytics } from "@vercel/analytics/react";
import 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';
import { SpeedInsights } from "@vercel/speed-insights/react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navigation />

      <div className="ContentBox">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Creating universes beyond time</h1>
          <button className="cta-button">Explore Our Universe</button>
        </div>
      </section>

      <br />

      <section className="about" id="about">
        <h2>About Us</h2>
      </section>

      {/* Vercel */}
      <SpeedInsights />
      <Analytics />

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
    </div>
  );
};

export default Home;