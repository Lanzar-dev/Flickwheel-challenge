import React from "react";
import "./header.css";
import headerImg from "../../assets/headerImg.png";

const Header = () => {
  return (
    <div className="header-content">
      <div className="header-left-content">
        <div className="header-left-content-text">
          <h1>
            I<span className="apostrophy">’</span>M BRIDGET MARY
          </h1>
          <span className="circle"></span>
        </div>
        <p>JUNIOR / MID FRONT-END DEVELOPER</p>
      </div>
      <div className="header-right-content">
        <img src={headerImg} alt="img" />
      </div>
    </div>
  );
};

export default Header;
