import { useEffect } from "react";
import { render_ktmb_heatmap } from "../../../js/render_ktmb_heatmap.js";

export default function G7() {
  useEffect(() => {
    render_ktmb_heatmap();
  }, []);

  return (
    <section className="ktmb-seasonal-section">
      <div className="ktmb-seasonal-container">
        
        <div className="text-block">
          <p className="section-label">
            Act 4: Macro Temporal Rhythms
          </p>
          <h2>
            The Pulse of Heavy Rail: Analyzing Seasonal Travel Behaviors
          </h2>
          <p>
            Urban mobility isn't limited to daily home-to-work routines within city limits. By isolating 
            regional and interstate heavy rail systems (KTMB), we uncover a completely different rhythmic cycle. 
            Use the interactive selection menu below to toggle sectors; notice how premium interstate corridors like 
            the <strong>ETS</strong> display sharp, recurring hotspots matching national holiday windows and festive periods. 
            This structural variation proves that regional accessibility serves a vital cultural and leisure requirement, distinct 
            from high-frequency urban corridors.
          </p>
        </div>

        {/* Chart card containing our drop-down selector and canvas */}
        <div className="heatmap-card">
          <div id="ktmb-seasonal-heatmap"></div>
        </div>

      </div>
    </section>
  );
}