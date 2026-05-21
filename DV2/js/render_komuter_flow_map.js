import vegaEmbed from "vega-embed";

export function render_komuter_ranking() {
  const rankingSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 600,
    "height": 450,
    "background": "#F8FAFC", // Matches your dashboard template
    
    "data": { "url": "../data/top_komuter_routes.csv" },
    
    "mark": {
      "type": "bar",
      "color": "#0055FF", // Vibrant transit blue
      "cornerRadiusEnd": 4 // Smooths out the bar tips for a modern look
    },
    
    "encoding": {
      // Y-axis displays the route, sorted descending by ridership volume
      "y": {
        "field": "route",
        "type": "nominal",
        "title": "Transit Corridor Pairs",
        "sort": "-x", // Ensures perfect sorting from busiest to least busy
        "axis": {
          "labelFontSize": 11,
          "titlePadding": 10
        }
      },
      // X-axis tracks absolute passenger journeys
      "x": {
        "field": "ridership",
        "type": "quantitative",
        "title": "Total Commuter Journeys (2026)",
        "axis": {
          "grid": true,
          "gridColor": "#E2E8F0"
        }
      },
      "tooltip": [
        { "field": "origin", "type": "nominal", "title": "Departure Station" },
        { "field": "destination", "type": "nominal", "title": "Arrival Station" },
        { "field": "ridership", "type": "quantitative", "format": ",", "title": "Total Passengers" }
      ]
    },
    "config": {
      "view": { "stroke": null }
    }
  };

  vegaEmbed("#komuter-ranking-chart", rankingSpec, { actions: false })
    .catch(console.error);
}