import embed from "vega-embed";

export function render_dependency_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Horizontal Ranked Bar Chart showing the Dependency Index (Volume / Interchange) of RapidKL Stations.",
    "width": 500,
    "height": 400,
    "background": "#F8FAFC",
    "data": {
      "url": "data/station_dependency.csv"
    },
    "mark": {
      "type": "bar",
      "cornerRadiusEnd": 3,
      "color": "#e11d48" // Rose-600 color for a "warning/strain" feel
    },
    "encoding": {
      "y": {
        "field": "station",
        "type": "nominal",
        "title": "Station",
        "sort": "-x"
      },
      "x": {
        "field": "dependency_index",
        "type": "quantitative",
        "title": "Dependency Index (Volume per Interchange)",
        "axis": {
          "format": "~s",
          "grid": true,
          "gridDash": [2, 2]
        }
      },
      "color": {
        "field": "dependency_index",
        "type": "quantitative",
        "scale": {
          "scheme": "reds"
        },
        "legend": null
      },
      "tooltip": [
        { "field": "station", "type": "nominal", "title": "Station" },
        { "field": "volume", "type": "quantitative", "format": ",", "title": "Total Volume" },
        { "field": "interchanges", "type": "quantitative", "title": "Interchanges" },
        { "field": "dependency_index", "type": "quantitative", "format": ",.0f", "title": "Dependency Index" }
      ]
    },
    "config": {
      "view": { "stroke": null },
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "domain": false
      }
    }
  };

  embed("#dependency-chart", spec, { actions: false }).catch(console.error);
}
