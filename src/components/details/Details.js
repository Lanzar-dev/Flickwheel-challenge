import React from "react";
import "./details.css";
import logo from "../../assets/logo.png";

const Details = () => {
  return (
    <div className="details">
      {/* <div className="resume">
        <img src={logo} alt="logo" className="items-spacing" />
        <p className="items-spacing">
          I'M A PARAGRAPH. CLICK HERE TO ADD YOUR OWN TEXT AND EDIT ME. IT’S
          EASY. JUST ADD YOUR OWN CONTENT AND SIMPLY EXPRESS YOURSELF. FEEL FREE
          TO TELL ME, FUN THINGS ABOUT YOU, THAT WILL INTEREST ME THE MOST.
        </p>
        <div className="download-resume">
          <p>DOWNLOAD RESUME</p>
        </div>
      </div> */}
      <div className="bottom-details">
        <div className="professional">
          <h1>professional</h1>
        </div>
        <div className="portfolio">
          <h1>portfolio</h1>
        </div>
        <div className="experience">
          <h1>experience</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
