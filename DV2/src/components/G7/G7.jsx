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
            Act 6: The Cultural Pulse
          </p>
          <h2>
            Beyond the Grind: The Rhythms of a Nation Reunited
          </h2>
          <p>
            Urban mobility isn't just about the home-to-work routine; it has a deeper, cultural heartbeat. 
            By looking at 2025 seasonal behaviors, we see <strong>interstate friction</strong>. While urban 
            lines face daily pressure, the ETS and Intercity corridors pulse during festive periods and holidays. 
            This proves that transit is a vital cultural lifeline, moving families back to their roots across 
            the nation during Malaysia's most important moments.
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