import vegaEmbed from "vega-embed";

export function render_ktmb_heatmap() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 550,
    "height": 400,
    "background": "#F8FAFC",
    
    // Explicitly tell Vega-Lite to parse the CSV date column as a date object
    "data": { 
      "url": "../data/ridership_ktmb_monthly (2).csv",
      "format": { "parse": { "date": "date" } }
    },
    
    "params": [
      {
        "name": "ServiceSelect",
        "value": "ets",
        "bind": {
          "input": "select",
          "options": ["ets", "komuter", "komuter_utara", "shuttle_tebrau", "intercity"],
          "labels": ["ETS (Electric Train Service)", "KTM Komuter (Central)", "KTM Komuter (Northern)", "Shuttle Tebrau (SG-JB)", "KTM Intercity"],
          "name": "Select Train Sector: "
        }
      }
    ],
    "transform": [
      // 1. Filter rows by the selected dropdown value
      { "filter": "datum.service == ServiceSelect" },
      
      // 2. Convert date objects into clean text strings before encoding
      { "calculate": "timeFormat(datum.date, '%Y')", "as": "Year" },
      { "calculate": "timeFormat(datum.date, '%B')", "as": "Month" },
      
      // 3. Impute missing combinations to 0 to prevent gray null squares
      {
        "impute": "ridership",
        "key": "Month",
        "groupby": ["Year"],
        "value": 0
      }
    ],
    "mark": {
      "type": "rect",
      "stroke": null
    },
    "encoding": {
      "x": {
        "field": "Year",
        "type": "ordinal", // Uses clean ordinal categorization
        "title": "Year",
        "scale": { "padding": 0 },
        "axis": { 
          "labelAngle": 0,
          "grid": false
          // REMOVED: "format": "%Y" (No longer needed since text is pre-formatted!)
        }
      },
      "y": {
        "field": "Month",
        "type": "ordinal",
        "title": "Month",
        "scale": { "padding": 0 },
        // Enforces accurate top-to-bottom calendar ordering
        "sort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "axis": {
          "grid": false
          // REMOVED: "format": "%B" 
        }
      },
      "color": {
        "field": "ridership",
        "type": "quantitative",
        "scale": { 
          "scheme": "tealblues",
          "baseline": 0 
        },
        "title": "Monthly Riders"
      },
      "tooltip": [
        { "field": "service", "type": "nominal", "title": "Service Sector" },
        { "field": "Year", "type": "nominal", "title": "Year" },
        { "field": "Month", "type": "nominal", "title": "Month" },
        { "field": "ridership", "type": "quantitative", "format": ",", "title": "Total Riders" }
      ]
    },
    "config": {
      "view": { "stroke": null }
    }
  };

  vegaEmbed("#ktmb-seasonal-heatmap", spec, { actions: false }).catch(console.error);
}