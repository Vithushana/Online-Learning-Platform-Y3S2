import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">StartIT<span className="dot">•</span></div>
      <ul className="menu">
        <li className="active">Home</li>
        <li>Pages</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default Navbar;
