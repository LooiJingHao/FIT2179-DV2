import embed from "vega-embed";

export function render_national_seasonal_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Multi-line chart showing seasonal ridership comparison across years.",
    "width": 600,
    "height": 400,
    "background": "#F8FAFC",
    "data": {
      "url": "data/national_seasonal_ridership.csv"
    },
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
        "axis": {
          "labelAngle": -45,
          "grid": false
        }
      },
      "y": {
        "field": "total_ridership",
        "type": "quantitative",
        "title": "Total Monthly Ridership",
        "axis": {
          "format": "~s",
          "grid": true,
          "gridDash": [2, 2]
        }
      },
      "color": {
        "field": "year",
        "type": "nominal",
        "title": "Year",
        "scale": {
          "scheme": "category10"
        }
      },
      "tooltip": [
        { "field": "year", "type": "nominal", "title": "Year" },
        { "field": "month", "type": "nominal", "title": "Month" },
        { "field": "total_ridership", "type": "quantitative", "format": ",", "title": "Total Ridership" }
      ]
    },
    "config": {
      "view": { "stroke": null },
      "axis": {
        "domain": false,
        "labelFontSize": 10,
        "titleFontSize": 12
      }
    }
  };

  embed("#national-seasonal-chart", spec, { actions: false }).catch(console.error);
}
