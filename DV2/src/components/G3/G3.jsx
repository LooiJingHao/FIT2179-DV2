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
          <p className="section-label">Act 3: The Gravity Centers</p>

          <h2>The Weight of the City: Klang Valley’s Mega-Hubs</h2>

          <p>
            Zooming into Malaysia's busiest region, the pressure becomes visible. A small handful of 
            <strong>"Mega-Hubs"</strong> carry a disproportionate weight of the entire network's ridership. 
            By looking at these individual station volumes, we identify the gravitational centers that 
            dictate the flow of millions, setting the stage for the friction that occurs between them.
          </p>
        </div>

        <div className="station-hubs-chart-card">
          <div id="station-hubs-chart"></div>
        </div>
      </div>
    </section>
  );
}