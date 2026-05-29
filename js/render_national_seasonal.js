import embed from "vega-embed";

export function render_national_seasonal_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 400,
    "background": "#ffffff",
    "data": {
      "url": "data/national_seasonal_ridership.csv"
    },
    
    "transform": [
      { "filter": "datum.year != 2025" }
    ],

    "params": [
      {
        "name": "yearFilter",
        "select": { "type": "point", "fields": ["year"] },
        "bind": {
          "input": "select",
          "options": [null, "2019", "2020", "2021", "2022", "2023", "2024"],
          "labels": ["Show All Years", "2019", "2020", "2021", "2022", "2023", "2024"],
          "name": "Focus Year: "
        }
      }
    ],

    "mark": {
      "type": "line",
      "point": true,
      "interpolate": "monotone"
    },

    "encoding": {
      "x": {
        "field": "month",
        "type": "ordinal",
        "title": "Month",
        "sort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "axis": { "labelAngle": -45, "grid": false }
      },
      "y": {
        "field": "total_ridership",
        "type": "quantitative",
        "title": "Total Monthly Ridership",
        "axis": { "format": "~s", "grid": true }
      },
      "color": {
        "field": "year",
        "type": "nominal",
        "title": "Year",
        "scale": {
          "domain": ["2019", "2020", "2021", "2022", "2023", "2024"],
          "range": ["#0055FF", "#FF9900", "#9333ea", "#0891b2", "#64748b", "#0f172a"]
        },
        "legend": { "titleFontSize": 14, "labelFontSize": 12, "orient": "right" }
      },
      "opacity": {
        "condition": { "param": "yearFilter", "value": 1 },
        "value": 0.15
      },
      "strokeWidth": {
        "condition": { "param": "yearFilter", "value": 4 },
        "value": 1.5
      },
      "tooltip": [
        { "field": "year", "type": "nominal", "title": "Year" },
        { "field": "month", "type": "nominal", "title": "Month" },
        { "field": "total_ridership", "type": "quantitative", "format": ",", "title": "Ridership" }
      ]
    },
    "config": {
      "view": { "stroke": null },
      "axis": { "domain": false, "labelFontSize": 10, "titleFontSize": 12 }
    }
  };

  embed("#national-seasonal-chart", spec, { actions: false }).catch(console.error);
}
