import React from "react";
import Details from "../../components/details/Details";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Header />
      </div>
      <Details />
    </>
  );
};

export default Portfolio;
