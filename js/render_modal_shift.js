import vegaEmbed from "vega-embed";

export function render_modal_shift() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Interactive Multi-Line Chart showing average monthly ridership by year.",
    "data": { 
      "url": "data/ridership_malaysia.csv",
      "format": { 
        "parse": { 
          "date": "date",
          "rail_lrt_ampang": "number",
          "rail_mrt_kajang": "number",
          "rail_lrt_kj": "number",
          "rail_monorail": "number",
          "rail_mrt_pjy": "number",
          "bus_rkl": "number"
        } 
      }
    },
    "width": 860,
    "height": 400,
    "params": [
      {
        "name": "mode_select",
        "select": { "type": "point", "fields": ["Mode"] },
        "bind": "legend"
      }
    ],
    "transform": [
      {
        "fold": [
          "rail_lrt_ampang", 
          "rail_mrt_kajang", 
          "rail_lrt_kj", 
          "rail_monorail", 
          "rail_mrt_pjy", 
          "bus_rkl"
        ],
        "as": ["mode", "ridership"]
      },
      {
        "calculate": "year(datum.date)",
        "as": "year"
      },
      {
        "filter": "datum.year >= 2022 && datum.ridership > 0"
      },
      {
        "calculate": "datum.mode == 'bus_rkl' ? 'Bus (Rapid KL)' : datum.mode == 'rail_lrt_kj' ? 'LRT Kelana Jaya' : datum.mode == 'rail_lrt_ampang' ? 'LRT Ampang' : datum.mode == 'rail_mrt_kajang' ? 'MRT Kajang' : datum.mode == 'rail_mrt_pjy' ? 'MRT Putrajaya' : 'Monorail'",
        "as": "Mode"
      },
      {
        "aggregate": [{ "op": "mean", "field": "ridership", "as": "avg_ridership" }],
        "groupby": ["year", "Mode"]
      }
    ],
    "mark": { "type": "line", "strokeWidth": 4, "interpolate": "monotone", "point": { "size": 100 } },
    "encoding": {
      "x": {
        "field": "year",
        "type": "quantitative",
        "title": "Year",
        "axis": { "format": "d", "grid": false, "tickCount": 4 }
      },
      "y": {
        "field": "avg_ridership",
        "type": "quantitative",
        "title": "Avg. Monthly Ridership",
        "axis": { "format": "~s" }
      },
      "color": {
        "field": "Mode",
        "type": "nominal",
        "scale": {
          "domain": ["Bus (Rapid KL)", "LRT Kelana Jaya", "LRT Ampang", "MRT Kajang", "MRT Putrajaya", "Monorail"],
          "range": ["#e67e22", "#2980b9", "#16a085", "#27ae60", "#8e44ad", "#f1c40f"]
        },
        "legend": { 
          "titleFontSize": 14, 
          "labelFontSize": 12, 
          "orient": "bottom", 
          "align": "left",
          "columns": 3,
          "title": "Click Legend to Highlight a Mode",
          "titleLimit": 400
        }
      },
      "opacity": {
        "condition": { "param": "mode_select", "value": 1 },
        "value": 0.1
      },
      "strokeWidth": {
        "condition": { "param": "mode_select", "value": 5 },
        "value": 2
      },
      "tooltip": [
        { "field": "year", "type": "quantitative", "title": "Year" },
        { "field": "Mode", "type": "nominal" },
        { "field": "avg_ridership", "type": "quantitative", "format": ",.0f", "title": "Avg. Monthly Riders" }
      ]
    },
    "config": {
      "background": "transparent",
      "view": { "stroke": "transparent" }
    }
  };

  vegaEmbed("#modal-shift-chart", spec, { actions: false }).catch(console.error);
}
