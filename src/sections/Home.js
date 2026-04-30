import React from "react";
import dengueImg from "../assets/dengue.png";

export default function Home({ scrollToSection }) {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${dengueImg})` }}
    >
      <div className="home-overlay">
        
        <h1>
    Real-Time Recurrent Neural Network Based Dengue Forecasting Model
  for the Kelaniya Divisional Secretariat</h1>    
     <p>A deep learning based dengue forcasting sytem for all grama niladari divisions in kelaniya divisional secretaiat</p>


        <div className="home-buttons">
          <button
            className="home-btn methodology-btn"
            onClick={() => scrollToSection("methodology")}
          >
            Explore Methodology &rarr;
          </button>
          <button
            className="home-btn result-btn"
            onClick={() => scrollToSection("result")}
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
}