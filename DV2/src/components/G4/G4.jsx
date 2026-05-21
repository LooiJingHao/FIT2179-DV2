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
          <p className="section-label">National Ridership Trend</p>
          <h2>How Has Public Transport Ridership Changed Over Time?</h2>
          <p>
            Rail and bus ridership follow different demand patterns across Malaysia.
            The overview timeline below allows users to drag across a selected period,
            updating the main chart to reveal short-term changes and long-term movement trends.
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