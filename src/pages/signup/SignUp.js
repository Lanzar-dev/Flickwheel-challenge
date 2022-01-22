import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import "./signup.css";
import instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedIn.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const SignUp = () => {
  return (
    <>
      <div className="signup">
        <Nav />
        <div className="signup-info">
          <div className="signup-left">
            <h6>Sign Up to Order for a Service</h6>

            <p>Already have an account?</p>
            <p>
              You can{" "}
              <span>
                <Link to="/signin">Sign In!</Link>
              </span>
            </p>
          </div>
          <div className="signup-right">
            <input
              className="signup-input"
              type="text"
              placeholder="Username"
            />
            <input className="signup-input" type="text" placeholder="Email" />
            <input
              className="signup-input"
              type="text"
              placeholder="Password"
            />
            <button className="signup-input" type="button">
              SIGN UP
            </button>
            <div className="icons">
              <div className="divider">
                <hr className="line" />
                <span>or continue with</span>
                <hr className="line" />
              </div>
              <div className="social">
                <img src={instagram} alt="instagram" />
                <img src={linkedIn} alt="linkedIn" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </>
  );
};

export default SignUp;
