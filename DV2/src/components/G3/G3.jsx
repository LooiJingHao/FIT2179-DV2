import { useEffect } from "react";
import { station_hubs_chart } from "../../../js/station_hubs_chart.js";
// import "./StationHubsSection.css";

export default function G3() {
  useEffect(() => {
    station_hubs_chart();
  }, []);

  return (
    <section className="station-hubs-section">
      <div className="station-hubs-content">
        <div className="station-hubs-text">
          <p className="section-label">Klang Valley Deep Dive</p>

          <h2>Klang Valley’s Major Mobility Hubs</h2>

          <p>
            While the matrix reveals the busiest station-to-station flows, this chart
            shifts focus to individual stations. By combining passengers entering and
            exiting each station, it highlights the major hubs that carry Klang Valley’s
            rail demand and shape daily commuter movement.
          </p>
        </div>

        <div className="station-hubs-chart-card">
          <div id="station-hubs-chart"></div>
        </div>
      </div>
    </section>
  );
}