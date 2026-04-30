import React from "react";


export default function Objectives() {
  return (
    <div className="objective-section">
      <h1>Research Objectives</h1>

      <div className="objectives-wrapper">
        
        {/* Main Objectives */}
        <div className="objective-card main-card">
          <h2>Main Objectives</h2>
          <ul className="custom-list">
            <li>To develop a weekly dengue forecasting system for each Grama Niladari division in the Kelaniya Divisional Secretariat, using Recurrent Neural Network model to provide real-time predictions and actionable insights for public health planning.

</li>
            
          </ul>
        </div>

        {/* Specific Objectives */}
        <div className="objective-card specific-card">
          <h2>Specific Objectives</h2>
          <ul className="custom-list">
            <li>To identify and collect relevant factors that contribute to dengue spread.</li>
            <li>To analyze the relationships between the identified factors and dengue incidence to understand both linear and nonlinear effects.</li>
            <li>To develop a flood prediction model using historical and real-time hydro-meteorological data to estimate weekly flood duration as an input for dengue forecasting.</li>
            <li>To design LSTM model capable of capturing complex temporal dependencies and nonlinear relationships.</li>
            <li>To evaluate the performance of the proposed LSTM model using standard accuracy and compare it with a baseline SARIMAX model to validate its effectiveness.</li>
            <li>To implement an interactive web-based dashboard that visualizes GN-level dengue forecasts using color-coded risk maps for effective public health decision-making.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}