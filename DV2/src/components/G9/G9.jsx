import { useEffect } from "react";
import { render_national_seasonal_chart } from "../../../js/render_national_seasonal.js";

export default function G9() {
  useEffect(() => {
    render_national_seasonal_chart();
  }, []);

  return (
    <section className="national-seasonal-section">
      <div className="national-seasonal-container">
        <div className="text-block">
          <p className="section-label">Act 8: The Seasonal Heartbeat</p>
          <h2>Patterns of Progress: Comparing National Ridership by Year</h2>
          <p>
            When we overlay ridership data by year, the "heartbeat" of the nation becomes visible. 
            This visualization aggregates all rail and bus services to show how monthly travel patterns 
            evolve over time. 
          </p>
          <p>
            Notice the consistent dips and peaks that occur each year—often corresponding to major holiday 
            windows and festive seasons—and the steady upward shift of the lines, representing 
            Malaysia's ongoing commitment to public transit growth.
          </p>
        </div>

        <div className="chart-card">
          <div id="national-seasonal-chart"></div>
        </div>
      </div>
    </section>
  );
}
