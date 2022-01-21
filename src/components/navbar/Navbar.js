import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-links">
        <p className="home">
          <a href="#home">HOME</a>
        </p>
        <p>
          <a href="#professional">PROFESSIONAL</a>
        </p>
        <p>
          <a href="#experience">EXPERIENCE</a>
        </p>
        <p>
          <a href="#portfolio">PORTFOLIO</a>
        </p>
        <p>
          <a href="#contact">CONTACT</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
