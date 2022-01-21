import React from "react";
import "./professional.css";

const Professional = () => {
  return (
    <>
      <div className="professional">
        <div>
          <h2>
            <span className="num">01</span> PROFESSIONAL
          </h2>
          <p>MY KNOWLEGDE LEVEL IN SOFTWARE</p>
        </div>
        <div className="professional-skills">
          <div className="professional-skills-item">
            <span className="skill">WORDPRESS</span>
            <span className="bar"></span>
            <span className="skill-percentage">65%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">FIGMA</span>
            <span className="bar"></span>
            <span className="skill-percentage">30%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">GIT</span>
            <span className="bar"></span>
            <span className="skill-percentage">85%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">PHOTOSHOP</span>
            <span className="bar"></span>
            <span className="skill-percentage">68%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">ILLUSTRATOR</span>
            <span className="bar"></span>
            <span className="skill-percentage">70%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">JAVASCRIPT</span>
            <span className="bar"></span>
            <span className="skill-percentage">95%</span>
          </div>
          <div className="professional-skills-item">
            <span className="skill">HTML & CSS</span>
            <span className="bar"></span>
            <span className="skill-percentage">90%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professional;
