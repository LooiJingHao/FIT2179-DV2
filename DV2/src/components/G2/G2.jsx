import { useEffect } from "react";
import { render_dependency_chart } from "../../../js/render_dependency_chart.js";

export default function G2() {
  useEffect(() => {
    render_dependency_chart();
  }, []);

  return (
    <section className="dependency-index-section">
      <div className="dependency-index-container">
        <div className="text-block">
          <p className="section-label">Act 2: The Infrastructure Strain</p>
          <h2>The Dependency Index: Which Stations Are Most Vulnerable?</h2>
          <p>
            The <strong>Dependency Index</strong> reveals the burden placed on individual stations relative to their 
            connectivity. By dividing total passenger volume by the number of interchanges (available lines), we identify 
            high-traffic stations that lack the structural redundancy of a major hub. 
          </p>
          <p>
            Stations with a high index, like <strong>Bukit Bintang</strong> or <strong>KLCC</strong>, are "Systemic Single Points of Failure"—they process massive 
            human flows through a single line, making them far more vulnerable to disruptions than multi-line interchanges like 
            KL Sentral or Titiwangsa.
          </p>
        </div>

        <div className="chart-card">
          <div id="dependency-chart"></div>
        </div>
      </div>
    </section>
  );
}
