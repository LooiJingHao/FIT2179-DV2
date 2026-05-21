import { useEffect } from "react";
import { render_komuter_ranking } from "../../../js/render_komuter_flow_map.js"

export default function G6() {
  useEffect(() => {
    // Inject the sorted bar chart on component mount
    render_komuter_ranking();
  }, []);

  return (
    <section className="transit-ranking-section">
      <div className="transit-ranking-container">
        
        <div className="ranking-text-block">
          <p className="section-label">
            Act 5: The Breaking Points
          </p>
          <h2>
            Evidence of Strain: The Links Bearing the Heaviest Weight
          </h2>
          <p>
            To understand the true limits of our growth, we must isolate the specific pathways reaching their 
            breaking points. This data-driven rank reveals the <strong>"Twin Giants"</strong> of the network—the 
            Batu Caves ➔ KL Sentral corridors. These specific links generate over 130,000 trips each, proving that 
            network resilience is dictated by just a few high-friction corridors that demand urgent attention.
          </p>
        </div>

        {/* Center the ranking chart inside a beautiful card */}
        <div className="ranking-chart-card">
          <div id="komuter-ranking-chart"></div>
        </div>

      </div>
    </section>
  );
}