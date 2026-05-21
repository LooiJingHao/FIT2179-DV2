import { useEffect } from "react";
import { transport_count_map } from "../../../js/transport_count_map.js";
// import "./TransportCountMapSection.css";

export default function G5() {
  useEffect(() => {
    transport_count_map();
  }, []);

  return (
    <section className="transport-count-map-section">
      <div className="transport-count-map-container">
        <div className="transport-count-map-text">
          <p className="section-label">Act 2: The Geographic Reality</p>
          <h2>The Infrastructure Gap: Where is the System Centered?</h2>
          <p>
            While demand is national, infrastructure is a story of concentration. This map reveals a 
            <strong>geographic skew</strong>: public transport access points are heavily clustered in urban 
            economic engines. As we see the concentration of bus terminals and LRT stations, a critical question 
            emerges—how does this spatial imbalance create friction as millions funnel into just a few key regions?
          </p>
        </div>

        <div className="transport-count-map-card">
          <div id="transport-count-map"></div>
        </div>
      </div>
    </section>
  );
}