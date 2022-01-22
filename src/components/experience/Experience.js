import React from "react";
import "./experience.css";

const ExperienceDetails = () => {
  return (
    <>
      <div className="experience-details-content">
        <p>2019 - 2021</p>
        <h4>HOP!</h4>
        <p>Creative Design Lead</p>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes.
        </p>
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-top">
        <h2>
          <span className="num">03</span> EXPERIENCE
        </h2>
      </div>
      <div className="experience-details">
        <div className="experience-details-left">
          <ExperienceDetails />
          <ExperienceDetails />
        </div>
        <hr className="vertical-rule" />
        <div className="experience-details-right">
          <ExperienceDetails />
          <ExperienceDetails />
        </div>
      </div>
    </div>
  );
};

export default Experience;
