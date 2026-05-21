import embed from "vega-embed";

export function adjacency_matrix() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 500,
    "height": 400,

    "data": {
      "url": "data/adjacency_matrix.csv"
    },

    "config": {
      "background": "#F8FAFC",
      "view": {
        "stroke": "transparent"
      },
      "axis": {
        "labelFontSize": 10,
        "titleFontSize": 12,
        "labelColor": "#334155",
        "titleColor": "#1e293b",
        "domain": false,
        "ticks": false
      },
      "legend": {
        "titleFontSize": 12,
        "labelFontSize": 11
      }
    },

    "mark": {
      "type": "rect",
      "stroke": "#f7f3e8",
      "strokeWidth": 0.6
    },

    "encoding": {
      "x": {
        "field": "destination_label",
        "type": "nominal",
        "title": "Destination Station",
        "sort": {
          "field": "total_ridership",
          "op": "sum",
          "order": "descending"
        },
        "axis": {
          "labelAngle": -45,
          "labelAlign": "right",
          "labelLimit": 120
        }
      },

      "y": {
        "field": "origin_label",
        "type": "nominal",
        "title": "Origin Station",
        "sort": {
          "field": "total_ridership",
          "op": "sum",
          "order": "descending"
        },
        "axis": {
          "labelLimit": 130
        }
      },

      "color": {
        "field": "total_ridership",
        "type": "quantitative",
        "title": "Total Ridership",
        "scale": {
          "scheme": "blues",
          "type": "sqrt"
        },
        "legend": {
          "orient": "right",
          "gradientLength": 250
        }
      },

      "tooltip": [
        {
          "field": "origin",
          "type": "nominal",
          "title": "Origin"
        },
        {
          "field": "destination",
          "type": "nominal",
          "title": "Destination"
        },
        {
          "field": "total_ridership",
          "type": "quantitative",
          "title": "Total Ridership",
          "format": ",.0f"
        }
      ]
    }
  };

  embed("#adjacency-matrix", spec, { actions: false }).catch(console.error);
}