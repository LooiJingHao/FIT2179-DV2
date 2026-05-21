import vegaEmbed from "vega-embed";

export function render_ktmb_heatmap() {
  // Base specification for each individual "pulse" chart
  const baseSpec = {
    "width": 280,
    "height": 100,
    "mark": {
      "type": "area",
      "line": { "color": "#0D9488" },
      "color": {
        "gradient": "linear",
        "stops": [
          {"offset": 0, "color": "white"},
          {"offset": 1, "color": "#0D9488"}
        ],
        "x1": 1, "y1": 1, "x2": 1, "y2": 0
      },
      "opacity": 0.6,
      "interpolate": "monotone"
    },
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "title": null,
        "axis": {
          "format": "%b",
          "grid": false,
          "labelFlush": false,
          "ticks": false,
          "domain": false,
          "labelFontSize": 9
        }
      },
      "y": {
        "field": "ridership",
        "type": "quantitative",
        "title": null,
        "axis": {
          "grid": true,
          "gridDash": [2, 2],
          "ticks": false,
          "domain": false,
          "format": "~s",
          "labelFontSize": 9
        }
      },
      "tooltip": [
        {"field": "service", "type": "nominal", "title": "Service"},
        {"field": "date", "type": "temporal", "title": "Month", "format": "%B %Y"},
        {"field": "ridership", "type": "quantitative", "format": ",", "title": "Ridership"}
      ]
    }
  };

  // Helper to create a filtered spec for a specific service
  const createServiceSpec = (serviceName, displayName) => ({
    ...baseSpec,
    "title": {
      "text": displayName,
      "fontSize": 12,
      "fontWeight": "bold",
      "anchor": "start",
      "frame": "group"
    },
    "transform": [
      {"filter": "year(datum.date) == 2025"},
      {"filter": `datum.service == '${serviceName}'`}
    ]
  });

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "background": "#F8FAFC",
    "data": { 
      "url": "data/ridership_ktmb_monthly (2).csv",
      "format": { "parse": { "date": "date" } }
    },
    
    // Vertical concatenation of rows
    "vconcat": [
      {
        // Row 1: 2 graphs
        "hconcat": [
          createServiceSpec("komuter", "KTM Komuter (Central)"),
          createServiceSpec("komuter_utara", "KTM Komuter (Northern)")
        ],
        "spacing": 40
      },
      {
        // Row 2: 3 graphs
        "hconcat": [
          createServiceSpec("ets", "ETS (Interstate)"),
          createServiceSpec("intercity", "KTM Intercity"),
          createServiceSpec("shuttle_tebrau", "Shuttle Tebrau")
        ],
        "spacing": 40
      }
    ],
    "spacing": 40,
    "config": {
      "view": {"stroke": null}
    }
  };

  vegaEmbed("#ktmb-seasonal-heatmap", spec, { actions: false }).catch(console.error);
}