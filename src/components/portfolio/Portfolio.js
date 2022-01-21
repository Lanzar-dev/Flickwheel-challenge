import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div>
          <h2>
            <span className="num">02</span> PORTOFOLIO
          </h2>
          <p>
            MY LATEST WORK. <span className="see-more">SEE MORE</span>{" "}
          </p>
        </div>
        <div className="portfolio-images">
          <img src={portfolio1} alt="laptop" />
          <img src={portfolio2} alt="headphone" />
          <img src={portfolio3} alt="phone" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
