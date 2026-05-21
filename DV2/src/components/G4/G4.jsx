import { useEffect } from "react";
import { ridership_focus_chart } from "../../../js/ridership_focus_chart.js";

export default function G4() {
  useEffect(() => {
    // This executes once when the component mounts, injecting the Vega chart
    ridership_focus_chart();
  }, []);

  return (
    <section className="ridership-focus-section">
      <div className="ridership-focus-container">
        <div className="ridership-focus-text">
          <p className="section-label">Act 1: The National Ambition</p>
          <h2>The Resurgence: A Nation Returning to Rails and Roads</h2>
          <p>
            Malaysia's public transport story begins with a massive rebound. Following years of disruption, 
            national ridership has surged back to life. This timeline reveals the <strong>scale of our collective movement</strong>, 
            showing how millions have returned to rail and bus networks as the backbone of their daily lives. 
            But as demand reaches new heights, the system faces its next great challenge: handling the weight of its own success.
          </p>
        </div>

        <div className="ridership-chart-card">
          <div className="chart-legend-custom">
            <span className="legend-item">
              <span className="legend-line rail" style={{backgroundColor: '#0055FF', width: '20px', height: '3px', display: 'inline-block', marginRight: '8px'}}></span>
              Rail Ridership
            </span>
            <span className="legend-item" style={{marginLeft: '20px'}}>
              <span className="legend-box bus" style={{backgroundColor: '#FF9900', width: '15px', height: '15px', display: 'inline-block', marginRight: '8px'}}></span>
              Bus Ridership
            </span>
          </div>

          {/* Vega-Lite injects the canvas right here */}
          <div id="ridership-focus-chart"></div>
        </div>
      </div>
    </section>
  );
}