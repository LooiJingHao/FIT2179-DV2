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
            Act 3: Grid Demand Breakdown
          </p>
          <h2>
            Unveiling Network Bottlenecks: Top 15 High-Demand Commuter Links
          </h2>
          <p>
            To truly understand urban mobility friction, we must isolate the specific pathways bearing the heaviest weights. 
            By sorting travel corridors by total ridership, this visualization reveals that demand is heavily concentrated. 
            The twin routes between <strong>Batu Caves and KL Sentral</strong> overwhelmingly dominate the network, each generating 
            over 130,000 trips. This targeted view provides clear data-driven evidence of where rail expansions and extra train 
            frequencies are most urgently needed to reduce passenger overcrowding.
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