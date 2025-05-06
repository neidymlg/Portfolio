import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';  // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Portfolio</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
