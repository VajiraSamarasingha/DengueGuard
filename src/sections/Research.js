import React from "react";

//import "./app.css";

const researchData = [
  {
    title: "Overview",
    content:
      "Dengue is a major mosquito-borne disease worldwide, with millions of cases reported each year. In Sri Lanka, the Western Province, particularly Kelaniya MOH, experiences high dengue risk due to urbanization and climate variability. This research develops a real-time dengue forecasting system at the GN division level using ML and environmental data.",
  },
  {
    title: "Background",
    content:
      "Dengue incidence is influenced by environmental factors such as rainfall, land surface temperature, and humidity. Conventional models like ARIMA and SARIMA capture general trends but lack the ability to integrate real-time environmental data and temporal dependencies. ML improves prediction but often struggles with sequences.",
  },
  {
    title: "Problem Statement",
    content:
      "Current dengue prediction models in Sri Lanka are limited: they lack GN-level granularity, fail to capture nonlinear interactions, and cannot provide real-time actionable forecasts. This makes public health responses reactive rather than proactive.",
  },
  {
    title: "Research Gap",
    content:
      "Most models use district-level data, exclude flood, LST, and population dynamics, and produce static outputs. Lagged environmental effects are poorly incorporated, reducing the accuracy and usability of predictions.",
  },
  {
    title: "Novelty",
    content:
      "This study uses LSTM neural networks to capture nonlinear temporal dynamics, integrates multi-source real-time data including climate, floods, LST, and population, and provides interactive GN-level weekly forecasts via a web-based dashboard.",
  },
  {
    title: "Motivation",
    content:
      "To enable proactive dengue control in Kelaniya by providing early warnings at GN level, supporting evidence-based decisions for health authorities, and creating an interactive dashboard for weekly dengue risk visualization.",
  },
];



export default function Research() {
  return (
    <div className="research-content research-wrapper">
     <h1 className="research-title">Research</h1>
      <div className="cards-container">
        {researchData.map((item, index) => (
          <div key={index} className="research-card">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      </div>
      
    );
}