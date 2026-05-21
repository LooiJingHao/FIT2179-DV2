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
          <p className="section-label">National Overview</p>
          <h2>Where Are Public Transport Access Points Concentrated?</h2>
          <p>
            This map combines <strong>bus terminals</strong> and <strong>LRT stations</strong> to show how selected public transport infrastructure is distributed across Malaysian states. Higher counts are concentrated in more urbanised regions, setting the national context before zooming into Klang Valley’s passenger movement patterns.
          </p>
        </div>

        <div className="transport-count-map-card">
          <div id="transport-count-map"></div>
        </div>
      </div>
    </section>
  );
}