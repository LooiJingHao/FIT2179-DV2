import vegaEmbed from "vega-embed";

export function render_environmental_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Correlation between Public Transport Ridership and Carbon Monoxide (CO) levels.",
    "width": 800,
    "height": 400,
    "data": { 
      "url": "data/environmental_correlation.csv",
      "format": { 
        "parse": { 
          "total_ridership": "number", 
          "concentration": "number", 
          "year": "number" 
        } 
      }
    },
    "layer": [
      {
        "mark": { 
          "type": "circle", 
          "size": 180, 
          "opacity": 0.8, 
          "stroke": "#fff", 
          "strokeWidth": 1 
        },
        "encoding": {
          "x": { 
            "field": "total_ridership", 
            "type": "quantitative", 
            "title": "Monthly Ridership (Urban Rail & Bus)",
            "scale": { "zero": false, "nice": true },
            "axis": { "format": "~s", "grid": true, "gridDash": [2, 2] }
          },
          "y": { 
            "field": "concentration", 
            "type": "quantitative", 
            "title": "CO Concentration (ppm)",
            "scale": { "zero": false, "nice": true },
            "axis": { "format": ".2f", "grid": true, "gridDash": [2, 2] }
          },
          "color": {
            "field": "year",
            "type": "nominal",
            "scale": { 
              "domain": [2019, 2020, 2021, 2022],
              "range": ["#0055FF", "#FF9900", "#9333ea", "#0891b2"] 
            },
            "legend": { "titleFontSize": 14, "labelFontSize": 12, "orient": "right", "title": "Year" }
          },
          "tooltip": [
            { "field": "date", "type": "temporal", "title": "Month", "format": "%B %Y" },
            { "field": "total_ridership", "type": "quantitative", "format": ",", "title": "Monthly Riders" },
            { "field": "concentration", "type": "quantitative", "format": ".3f", "title": "CO Level (ppm)" }
          ]
        }
      },
      {
        "mark": { "type": "line", "color": "#2c3e50", "strokeDash": [5, 5], "strokeWidth": 3 },
        "transform": [
          { "regression": "concentration", "on": "total_ridership" }
        ],
        "encoding": {
          "x": { "field": "total_ridership", "type": "quantitative" },
          "y": { "field": "concentration", "type": "quantitative" }
        }
      }
    ],
    "config": {
      "background": "transparent",
      "view": { "stroke": "transparent" }
    }
  };

  vegaEmbed("#environmental-chart", spec, { actions: false }).catch(console.error);
}
