import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/logo.png";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <p>
          <a href="#Technicians">Technicians</a>
        </p>
      </div>
      <div className="nav-links">
        <p>
          <a href="#Order">Order</a>
        </p>
      </div>
      <div className="nav-links">
        <p>
          <a href="#Aboutus">About us</a>
        </p>
      </div>
      <div className="nav-links dropdown">
        <p>
          <a href="#English">English</a>
          {/* <KeyboardArrowDownOutlinedIcon /> */}
        </p>
      </div>
      <div className="nav-links">
        <p>
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
      <div className="nav-signup">
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
        <div className="bottom-div"></div>
      </div>
    </div>
  );
};

export default Nav;
