import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll style it next
import logo from "../assets/logo.png"; // Your custom logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="My Logo" />
        <span>K.K.</span> {/* Your initials */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
