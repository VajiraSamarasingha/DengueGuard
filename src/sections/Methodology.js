import React, { useState } from "react";
//import "./methodology.css";
import {
  FaDatabase,
  FaCogs,
  FaWater,
  FaProjectDiagram,
  FaBrain,
  FaChartLine,
  FaBalanceScale,
  FaCheckCircle
} from "react-icons/fa";

const steps = [
  {
    title: "Step 1: Data Collection",
    icon: <FaDatabase />,
    content: [
      <p>Flood Predction(2015-2025)</p>,
       "Hydro-meteorological data (rainfall, rainfall intensity, soil moisture,Peak water level of Nagalagam street,flood coourance and flood days)",
       "Terrain data (elevation, slope, static drainage density,active drainage density)",
       <p>Dengue Forecast(2019-2025)</p>,
       "Climate data (rainfall,relative humidity,land surface temperature,flood days)",
       "Dynamic Population data",
       "Historical dengue case data",
     
    ],
  },
  
  {
    title: "Step 2: Flood Prediction Model Development",
    icon: <FaWater />,
    content: [
      "Data preprocessing and final datset creation",
<p> Model Training</p>,
"Train multiple models:Random Forest,XGBoost,SVM,CatBoost,LightGBM",
<p>Prediction Tasks</p>,
"Classification → Flood occurrence (Yes/No)",
"Regression → Flood duration (Flood days)",
<p>Model Evaluation</p>,
"Compare models using metrics:",
"Accuracy / F1-score /Precision/Recall/ROC-AUC(classification)",
"RMSE / MAE/ R²(regression)",
<p> Output Generation</p>,
"Select best-performing models",
"Generate:Weekly flood occurrence,Weekly flood days",
    ],
  },
 {
    title: "Step 3: Dengue Forecasting Model Development",
    icon: <FaBrain />,
    content: [
       "Combine flood outputs and other inputs used in dengue forcasting model",
       "Data preprossing",
      "Create a final dataset for dengue prediction",
    
<p>Model Training</p>,
"Train input data time-series input sequences using lstm model",
 "Generate RMSE,MSE,R² and Classification report",
<p>Prediction Tasks</p>,
"Regression → Dengue count",
"Classification → Risk predction(High/Medium/Low)",

    ],
  },
  {
    title: "Step 4: Baseline Model Development",
    icon: <FaChartLine />,
    content: [
      "Develop SARIMAX model using same input used in LSTM moodel",
      "Generate RMSE, MAE and R² and Classification report",
      
    ],
  },
  {
    title: "Step 5:Performance Evaluation",
    icon: <FaBalanceScale />,
    content: [
      "Compare with sarimax to prove lstm can capture tempral and non linear dependencies than sarimax",
    ],
  },
  {
    title: "Step 6: Visulaization",
    icon: <FaCheckCircle />,
    content: [
      "Generate Weekly dengue risk prediction for all GN divisions in Kelaniya Divisional Secretiat",
     
    ],
  },
];

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="timeline-section">
      <h1 className="title">Methodology</h1>

      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Circle Icon only */}
            <div className="timeline-circle">
              <div className="circle-icon">{step.icon}</div>
            </div>

            {/* Card */}
            <div
              className={`timeline-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3>{step.title}</h3>

              <div
                className={`content ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <ul>
                  {step.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}