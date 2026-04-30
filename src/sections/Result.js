import React, { useState } from "react";
//import "./Result.css";

export default function Result() {
  const [openSection, setOpenSection] = useState("flood");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="result-section">
      <h1 className="result-title">Results</h1>

      {/* ================= Flood Prediction ================= */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => toggleSection("flood")}
        >
          Flood Prediction
        </div>

        {openSection === "flood" && (
          <div className="accordion-content">

            

            {/* ================= Classification Table ================= */}
            <h2>Classification Results(Flood Occurance)</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Accuracy</th>
                    <th>Precision</th>
                    <th>Recall</th>
                    <th>F1</th>
                    <th>ROC-AUC</th>
                    
                  
                  </tr>
                </thead>

                <tbody>
                  {/* Random Forest */}
                  <tr>
                    <td >Random Forest</td>
                   <td>0.9039</td>
                   <td>0.8981</td>
                   <td>0.9882</td>
                   <td>0.9404</td>
                   <td>0.9321</td>
                  </tr>
                  
                  

                  {/* XGBoost */}
                  <tr>
                    <td>XGBoost</td>
                    <td>0.9539</td>
                    <td>0.9502</td>
                    <td>0.9935</td>
                    <td>0.9712</td>
                    <td>0.9867</td>
                  </tr>
                 

                  {/* SVM */}
                  <tr>
                    <td>SVM</td>
                   <td>0.8860</td>
                   <td>0.8918</td>
                   <td>0.9777</td>
                   <td>0.9327</td>
                   <td>0.8925</td>
                  </tr>
                  

                  {/* CatBoost */}
                  <tr>
                    <td>CatBoost</td>
                    <td>0.9365</td>
                    <td>0.9284</td>
                    <td>0.9938</td>
                    <td>0.9594</td>
                    <td>0.9806</td>
                  </tr>
                  

                  {/* LightGBM */}
                  <tr className="highlight-row">
                    <td>LightGBM</td>
                    <td>0.9583</td>
                    <td>0.9535</td>
                    <td>0.9959</td>
                    <td>0.9742</td>
                    <td>0.9886</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

            {/* ================= Regression Table ================= */}
            <h2>Regression Results(Flood Days)</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>MAE</th>
                    <th>RMSE</th>
                    <th>R²</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Random Forest */}
                  <tr>
                    <td>Random Forest</td>
                   <td>0.65476</td>
                   <td>0.90302</td>
                   <td>0.61062</td>
                  </tr>
                 
                  {/* XGBoost */}
                  <tr>
                    <td>XGBoost</td>
                    <td>0.21416</td>
                    <td>0.33086</td>
                     <td>0.94848</td>
                  </tr>
              

                  {/* SVM */}
                  <tr>
                    <td>SVM</td>
                    <td>0.3327</td>
                    <td>0.5651</td>
                     <td>0.8479</td>
                  </tr>
               
                  {/* CatBoost */}
                  <tr>
                    <td>CatBoost</td>
                  <td>MAE:0.30562</td>
                  <td>RMSE:0.45296</td>
                   <td>R²:0.89996</td>
                  </tr>
                 
                  {/* LightGBM */}
                  <tr className="highlight-row">
                    <td>LightGBM</td>
                    <td>0.17064</td>
                    <td>0.29312</td>
                    <td>0.95853</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
             {/* Summary Cards */}
            <div className="cards">
              <div className="result-card highlight">
                <h3>Best Model</h3>
                <p>LightGBM</p>
              </div>

              
              
            </div>
          </div>
        )}
      </div>

      {/* ================= Dengue Forecast ================= */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => toggleSection("dengue")}
        >
          Dengue Forecast
        </div>

        {openSection === "dengue" && (
          <div className="accordion-content">
              {/* ================= Regression Table ================= */}
            <h2>Regression Results(Dengue Count)</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>MAE</th>
                    <th>RMSE</th>
                    <th>R²</th>
                  </tr>
                </thead>

                <tbody>
                  {/* sarimax */}
                  <tr>
                    <td>SARIMAX(Baseline)</td>
                   <td> 2.5980</td>
                   <td> 3.1411</td>
                   <td>0.1267</td>
                  </tr>
                 
                  {/* lstm */}
                  <tr className="highlight-row">
                    <td>LSTM</td>
                    <td>0.9244</td>
                    <td>1.2385</td>
                     <td>0.8990</td>
                  </tr>
              

                  
                </tbody>
              </table>
          </div>
       <div className="report-row">
          <h2>LSTM Classification Report(Dengue Risk)</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>precision</th>
                    <th>recall</th>
                    <th>f1-score</th>
                    <th>support</th>
                  </tr>
                </thead>

                <tbody>
                 
                  <tr>
                    <td  className="highlight-col">Low</td>
                   <td> 0.85</td>
                   <td> 0.87 </td>
                   <td>0.86</td>
                   <td>4297</td>
                  </tr>
                 
                  <tr>
                    <td  className="highlight-col">Medium</td>
                    <td>0.89</td>
                    <td>0.80 </td>
                     <td>0.84 </td>
                     <td>4311</td>
                  </tr>

                  <tr>
                    <td  className="highlight-col">High</td>
                    <td> 0.79</td>
                    <td>0.84</td>
                     <td>0.81</td>
                     <td>4268</td>
                  </tr>
              <tr>
                    <td  className="highlight-col">accuracy </td>
                    <td></td>
                    <td></td>
                     <td>0.84</td>
                     <td>12876</td>
                  </tr>

                  <tr>
                    <td  className="highlight-col">macro avg</td>
                    <td>0.84</td>
                    <td>0.84</td>
                     <td>0.84</td>
                     <td> 12876</td>
                  </tr>
                  <tr>
                    <td  className="highlight-col">weighted avg</td>
                    <td>0.84</td>
                    <td>0.84</td>
                     <td>0.84</td>
                     <td>12876</td>
                  </tr>

                </tbody>
              </table>
          </div>
          </div>

       <div className="report-box">
        <h2>SARIMAX Classification Report(Dengue Risk)</h2>
           <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>precision</th>
                    <th>recall</th>
                    <th>f1-score</th>
                    <th>support</th>
                  </tr>
                </thead>

                <tbody>
                 
                  <tr>
                    <td  className="highlight-col">Low</td>
                   <td> 0.84</td>
                   <td> 0.61 </td>
                   <td>0.71</td>
                   <td>4297</td>
                  </tr>
                 
                  <tr>
                    <td  className="highlight-col">Medium</td>
                    <td>0.64</td>
                    <td>0.68 </td>
                     <td>0.66 </td>
                     <td>4311</td>
                  </tr>

                  <tr>
                    <td  className="highlight-col">High</td>
                    <td> 0.80</td>
                    <td>0.69</td>
                     <td>0.74</td>
                     <td>4268</td>
                  </tr>
              <tr>
                    <td  className="highlight-col">accuracy </td>
                    <td></td>
                    <td></td>
                     <td >0.75</td>
                     <td>12876</td>
                  </tr>

                  <tr>
                    <td  className="highlight-col">macro avg</td>
                    <td>0.76</td>
                    <td>0.66</td>
                     <td>0.70</td>
                     <td> 12876</td>
                  </tr>
                  <tr>
                    <td  className="highlight-col">weighted avg</td>
                    <td>0.76</td>
                    <td>0.66</td>
                     <td>0.70</td>
                     <td>12876</td>
                  </tr>

                </tbody>
              </table>
              </div>




              </div>


                {/* ================= Dependency Analysis ================= */}
            <h2>Model Dependency Analysis (LSTM vs SARIMAX)</h2>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>SARIMAX</th>
                    <th>LSTM</th>
                    <th>Interpretation</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Ljung-Box (Temporal)</td>
                    <td>0.01</td>
                    <td>0.14</td>
                    <td>LSTM removes autocorrelation in residuals</td>
                  </tr>

                  <tr>
                    <td>BDS Test (Nonlinear)</td>
                    <td>0.02</td>
                    <td>0.21</td>
                    <td>LSTM captures nonlinear structure</td>
                  </tr>

                  <tr>
                    <td>ADF Test (Stationarity)</td>
                    <td>0.23</td>
                    <td>0.01</td>
                    <td>LSTM residuals are stationary (well-fitted)</td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* ================= Key Findings Card ================= */}
<div className="key-findings-card">

  <h2>Key Findings</h2>

  <ul>
    <li>
      LSTM significantly outperforms SARIMAX with approximately
      <b> 60.6% reduction in RMSE</b>, confirming higher predictive accuracy.
    </li>

    <li>
      SARIMAX residuals show significant autocorrelation (Ljung-Box p &lt; 0.05),
      indicating failure to fully capture <b>temporal dependencies</b>.
    </li>

    <li>
      LSTM residuals are free from autocorrelation (Ljung-Box p &gt; 0.05),
      proving strong capability in modeling <b>sequential time dependencies</b>.
    </li>

    <li>
      SARIMAX fails to capture nonlinear relationships as shown by BDS test
      (p &lt; 0.05), leaving structured patterns in residuals.
    </li>

    <li>
      LSTM successfully captures <b>nonlinear dependencies</b> (BDS p &gt; 0.05),
      making it more suitable for complex dengue dynamics.
    </li>

    <li>
      LSTM residuals are stationary (ADF p &lt; 0.05), confirming a well-fitted
      forecasting model with minimal unexplained structure.
    </li>

    <li>
      Overall, LSTM is the most reliable model for dengue forecasting due to its
      ability to learn both <b>temporal and nonlinear patterns</b>.
    </li>
  </ul>

</div>

          </div>
        )}
      </div>
    </div>
  );
}