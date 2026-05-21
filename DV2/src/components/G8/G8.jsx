import { useEffect } from "react";
import { render_dependency_chart } from "../../../js/render_dependency_chart.js";

export default function G8() {
  useEffect(() => {
    render_dependency_chart();
  }, []);

  return (
    <section className="dependency-index-section">
      <div className="dependency-index-container">
        <div className="text-block">
          <p className="section-label">Act 7: Understanding Vulnerability</p>
          <h2>The Dependency Index: Which Stations Are Most At Risk?</h2>
          <p>
            As our network grows, some parts of the system become more "vulnerable" than others. 
            The <strong>Dependency Index</strong> identifies stations that handle massive crowds but 
            only have a single line to move them.
          </p>
          <p>
            Stations like <strong>Bukit Bintang</strong> and <strong>KLCC</strong> process hundreds 
            of thousands of people every day. Unlike major hubs with many lines, these stations 
            don't have a "backup plan"—making them the most critical points in our daily commute.
          </p>
        </div>

        <div className="chart-card">
          <div id="dependency-chart"></div>
        </div>
      </div>
    </section>
  );
}
