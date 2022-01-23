import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/logo.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Nav = () => {
  const [signupDiv, setSignupDiv] = useState(false);
  const [signinDiv, setSigninDiv] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setSignupDiv(true);
    } else if (location.pathname === "/signin") {
      setSigninDiv(true);
    }
  }, [location.pathname]);

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
        <p className="arrowIcon">
          <a href="#English">English</a>
          <KeyboardArrowDownOutlinedIcon />
        </p>
      </div>
      <div className={signinDiv ? "nav-links nav-signup" : "nav-links"}>
        <p>
          <Link to="/signin">Sign In</Link>
        </p>
        {signinDiv && <div className="bottom-div"></div>}
      </div>
      <div className={signupDiv ? "nav-signup" : ""}>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
        {signupDiv && <div className="bottom-div"></div>}
      </div>
    </div>
  );
};

export default Nav;
