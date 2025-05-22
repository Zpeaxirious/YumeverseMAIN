import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
import '../App.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <span className="yume">YUME</span><span className="verse">VERSE</span>
        </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <a href="https://docs.yumeverse.net/" onClick={() => setIsMenuOpen(false)}>Docs</a>
        <Link to="/dev" onClick={() => setIsMenuOpen(false)}>Dev</Link>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navigation;
