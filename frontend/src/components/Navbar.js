import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">SkillHive<span className="dot">•</span></div>
      <ul className="menu">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/" className="nav-link">About</Link></li>
        <li><Link to="/" className="nav-link">Courses</Link></li>

        <li className="dropdown" onClick={toggleDropdown}>
          Pages ▾
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/admin/dashboard">Admin</Link></li>
              <li><Link to="/mentor/dashboard">Mentor</Link></li>
              <li><Link to="/dashboard">Student</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/blog" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
