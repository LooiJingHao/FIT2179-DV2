import embed from "vega-embed";

export function station_hubs_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 720,
    "height": 420,

    "data": {
      "url": "/data/station_hubs_top10.csv"
    },

    "transform": [
      {
        "fold": ["origin_total", "destination_total"],
        "as": ["movement_type", "ridership"]
      },
      {
        "calculate": "datum.movement_type == 'origin_total' ? 'Origin Ridership' : 'Destination Ridership'",
        "as": "Movement Type"
      }
    ],

    "config": {
      "background": "#f7f3e8",
      "view": {
        "stroke": "transparent"
      },
      "axis": {
        "labelFontSize": 12,
        "titleFontSize": 13,
        "labelColor": "#334155",
        "titleColor": "#1e293b",
        "gridColor": "#e5e7eb",
        "domain": false,
        "ticks": false
      },
      "legend": {
        "titleFontSize": 12,
        "labelFontSize": 11,
        "orient": "bottom"
      }
    },

    "mark": {
      "type": "bar",
      "cornerRadiusEnd": 4
    },

    "encoding": {
      "y": {
        "field": "station_label",
        "type": "nominal",
        "title": null,
        "sort": {
          "field": "total_movement",
          "order": "descending"
        },
        "axis": {
          "labelLimit": 160
        }
      },

      "x": {
        "field": "ridership",
        "type": "quantitative",
        "title": "Total Ridership",
        "axis": {
          "format": "s"
        },
        "stack": "zero"
      },

      "color": {
        "field": "Movement Type",
        "type": "nominal",
        "title": null,
        "scale": {
          "range": ["#2563eb", "#f59e0b"]
        }
      },

      "tooltip": [
        {
          "field": "station",
          "type": "nominal",
          "title": "Station"
        },
        {
          "field": "Movement Type",
          "type": "nominal",
          "title": "Type"
        },
        {
          "field": "ridership",
          "type": "quantitative",
          "title": "Ridership",
          "format": ",.0f"
        },
        {
          "field": "total_movement",
          "type": "quantitative",
          "title": "Total Movement",
          "format": ",.0f"
        }
      ]
    }
  };

  embed("#station-hubs-chart", spec, { actions: false }).catch(console.error);
}