import vegaEmbed from "vega-embed";

export function render_komuter_ranking() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 880,
    "height": 400,
    "background": "#ffffff",
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
          "strokeCap": "butt" 
        },
        "encoding": {
          "x": { "datum": 160, "type": "quantitative", "scale": { "domain": [0, 850] }, "axis": null },
          "x2": { "datum": 680 },
          "y": {
            "field": "origin",
            "type": "nominal",
            "axis": { "labels": false, "ticks": false, "domain": false, "title": null },
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
            "legend": {
              "titleFontSize": 14,
              "labelFontSize": 12,
              "title": "Passenger Volume",
              "orient": "right",
              "format": "~s",
              "offset": -80 
            }
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
          "x": { "datum": 160, "type": "quantitative" },
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
          "x": { "datum": 680, "type": "quantitative" },
          "y": {
            "field": "destination",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          }
        }
      },
      // 4. Origin Labels (Left-aligned, closer to nodes)
      {
        "mark": { "type": "text", "align": "left", "dx": -150, "fontSize": 12, "fontWeight": "600" },
        "encoding": {
          "x": { "datum": 160, "type": "quantitative" },
          "y": {
            "field": "origin",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          },
          "text": { "field": "origin" }
        }
      },
      // 5. Destination Labels (Right of nodes)
      {
        "mark": { "type": "text", "align": "left", "dx": 15, "fontSize": 12, "fontWeight": "600" },
        "encoding": {
          "x": { "datum": 680, "type": "quantitative" },
          "y": {
            "field": "destination",
            "type": "nominal",
            "sort": { "field": "ridership", "op": "sum", "order": "descending" }
          },
          "text": { "field": "destination" }
        }
      },
      // 6. Header: ORIGIN
      {
        "data": {"values": [{"text": "ORIGIN"}]},
        "mark": { "type": "text", "fontWeight": "bold", "fontSize": 14, "dy": -210, "color": "#1E293B", "align": "center" },
        "encoding": {
          "x": { "datum": 160, "type": "quantitative" },
          "text": { "field": "text" }
        }
      },
      // 7. Header: DESTINATION
      {
        "data": {"values": [{"text": "DESTINATION"}]},
        "mark": { "type": "text", "fontWeight": "bold", "fontSize": 14, "dy": -210, "color": "#1E293B", "align": "center" },
        "encoding": {
          "x": { "datum": 680, "type": "quantitative" },
          "text": { "field": "text" }
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
