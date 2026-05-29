import embed from "vega-embed";

export function station_hubs_chart() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 780,
    "height": 400,
    "background": "#ffffff",
    "data": { "url": "data/station_hubs_top10.csv" },

    "params": [
      {
        "name": "hubSort",
        "value": "total_movement",
        "bind": {
          "input": "radio",
          "options": ["total_movement", "origin_total", "destination_total"],
          "labels": ["Total Traffic", "Origin only", "Destination only"],
          "name": "Sort by: "
        }
      }
    ],

    "transform": [
      // Create a long format for grouping
      {
        "fold": ["origin_total", "destination_total"],
        "as": ["type", "value"]
      },
      // Clean names for display
      {
        "calculate": "datum.type == 'origin_total' ? 'Outbound (Origin)' : 'Inbound (Destination)'",
        "as": "Traffic Type"
      },
      // HD FIX: Use a calculated field for sorting to avoid signal duplication
      { "calculate": "datum[hubSort]", "as": "sortField" }
    ],

    "mark": { "type": "bar", "cornerRadiusEnd": 3 },

    "encoding": {
      "y": {
        "field": "station", // Using unique ID + Name
        "type": "nominal",
        "title": null,
        "sort": { "field": "sortField", "order": "descending" },
        "axis": { "labelFontSize": 11 }
      },
      "x": {
        "field": "value",
        "type": "quantitative",
        "title": "Annual Passenger Volume",
        "axis": { "format": "~s", "grid": true }
      },
      "yOffset": {
        "field": "Traffic Type",
        "type": "nominal"
      },
      "color": {
        "field": "Traffic Type",
        "type": "nominal",
        "scale": {
          "range": ["#1f77b4", "#ff7f0e"] // Accessible Blue/Orange
        },
        "legend": { 
          "titleFontSize": 14,
          "labelFontSize": 12,
          "orient": "none", 
          "legendX": 450, 
          "legendY": 300, 
          "title": null,
          "fillColor": "rgba(255, 255, 255, 0.8)",
          "padding": 5,
          "cornerRadius": 3
        }
      },
      "tooltip": [
        { "field": "station", "type": "nominal", "title": "Station ID" },
        { "field": "station_label", "type": "nominal", "title": "Name" },
        { "field": "Traffic Type", "type": "nominal" },
        { "field": "value", "type": "quantitative", "format": ",", "title": "Ridership" },
        { "field": "total_movement", "type": "quantitative", "format": ",", "title": "Total Hub Volume" }
      ]
    },
    "config": {
      "view": { "stroke": null },
      "axis": { "domain": false }
    }
  };

  embed("#station-hubs-chart", spec, { actions: false }).catch(console.error);
}
