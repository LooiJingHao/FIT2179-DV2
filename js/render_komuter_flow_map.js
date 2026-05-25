import vegaEmbed from "vega-embed";

export function render_komuter_ranking() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 600,
    "height": 500,
    "background": "#F8FAFC",
    "data": { "url": "data/top_komuter_routes.csv" },
    
    "transform": [
      {"calculate": "datum.origin + ' to ' + datum.destination", "as": "link_id"}
    ],

    "layer": [
      // 1. The Links (The Flow)
      {
        "params": [
          {
            "name": "highlight",
            "select": { "type": "point", "on": "mouseover" }
          }
        ],
        "mark": {
          "type": "rule",
          "strokeCap": "butt" // Cleaner edge for links
        },
        "encoding": {
          "x": { "datum": "Origin", "type": "nominal", "title": null },
          "x2": { "datum": "Destination" },
          "y": {
            "field": "origin",
            "type": "nominal",
            "axis": { "labels": false, "ticks": false, "domain": false, "title": null }, // HIDDEN: Removes redundancy
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          },
          "y2": {
            "field": "destination",
            "type": "nominal"
          },
          "size": {
            "field": "ridership",
            "type": "quantitative",
            "scale": { "range": [1, 25] },
            "legend": null
          },
          "color": {
            "condition": {
              "param": "highlight",
              "empty": false,
              "value": "#EF4444"
            },
            "value": "#CBD5E1"
          },
          "opacity": {
            "condition": { "param": "highlight", "empty": false, "value": 1 },
            "value": 0.4
          },
          "tooltip": [
            { "field": "origin", "type": "nominal", "title": "From" },
            { "field": "destination", "type": "nominal", "title": "To" },
            { "field": "ridership", "type": "quantitative", "format": ",", "title": "Passengers" }
          ]
        }
      },
      // 2. The Nodes (Origin Rectangles)
      {
        "mark": { "type": "rect", "width": 8, "color": "#1E293B" },
        "encoding": {
          "x": { "datum": "Origin" },
          "y": {
            "field": "origin",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          }
        }
      },
      // 3. The Nodes (Destination Rectangles)
      {
        "mark": { "type": "rect", "width": 8, "color": "#1E293B" },
        "encoding": {
          "x": { "datum": "Destination" },
          "y": {
            "field": "destination",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          }
        }
      },
      // 4. Origin Labels
      {
        "mark": { "type": "text", "align": "right", "dx": -12, "fontSize": 12, "fontWeight": "600" },
        "encoding": {
          "x": { "datum": "Origin" },
          "y": {
            "field": "origin",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          },
          "text": { "field": "origin" }
        }
      },
      // 5. Destination Labels
      {
        "mark": { "type": "text", "align": "left", "dx": 12, "fontSize": 12, "fontWeight": "600" },
        "encoding": {
          "x": { "datum": "Destination" },
          "y": {
            "field": "destination",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          },
          "text": { "field": "destination" }
        }
      }
    ],
    "config": {
      "view": { "stroke": null },
      "axis": {
        "domain": false,
        "labelFontSize": 14,
        "labelPadding": 10,
        "labelFontWeight": "bold",
        "labelColor": "#64748B"
      }
    }
  };

  vegaEmbed("#komuter-ranking-chart", spec, { actions: false }).catch(console.error);
}