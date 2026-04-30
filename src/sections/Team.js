import React from "react";
//import "./Team.css";

export default function Team() {
  return (
    <div className="team-section">
      <h1 className="team-title">Research Team</h1>
      

      {/* Supervisor */}
      <div className="supervisors">
        <div className="card large">
          
          <h3>Mr. Chamila Karunathilake</h3>
          <p>Research Supervisor</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="team-members">
        <div className="card">
         
          <h4>H.H.Witharana </h4>
          <p>Lead Researcher</p>
        </div>

        <div className="card">
          
          <h4>P.S.D. Senadheera</h4>
          
        </div>

        <div className="card">
          
          <h4>B.L.Sandaruwan </h4>
          
        </div>
      </div>
    </div>
  );
}