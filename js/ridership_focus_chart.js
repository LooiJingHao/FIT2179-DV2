import vegaEmbed from "vega-embed";

export function ridership_focus_chart() {
  const vegaLiteSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": { "url": "data/cleaned_ridership.csv" }, 
    "background": "#ffffff",
    "vconcat": [
      {
        "width": 800,
        "height": 300,
        "layer": [
          {
            "mark": { "type": "bar", "color": "#FF9900", "opacity": 0.7 },
            "encoding": {
              "x": {
                "field": "date",
                "type": "temporal",
                "scale": { "domain": { "param": "brush" } },
                "title": "",
                "axis": { "grid": false }
              },
              "y": {
                "field": "Bus",
                "type": "quantitative",
                "title": "Total Ridership"
              },
              "tooltip": [
                { "field": "date", "type": "temporal", "title": "Date" },
                { "field": "Bus", "type": "quantitative", "format": ",", "title": "Bus Riders" }
              ]
            }
          },
          {
            "mark": { "type": "line", "color": "#0055FF", "strokeWidth": 2 },
            "encoding": {
              "x": {
                "field": "date",
                "type": "temporal",
                "scale": { "domain": { "param": "brush" } }
              },
              "y": {
                "field": "Rail",
                "type": "quantitative"
              },
              "tooltip": [
                { "field": "date", "type": "temporal", "title": "Date" },
                { "field": "Rail", "type": "quantitative", "format": ",", "title": "Rail Riders" }
              ]
            }
          }
        ]
      },
      {
        "width": 800,
        "height": 80,
        "title": { "text": "Overview (Hold Shift and select the range of months for interactivity)", "fontSize": 12, "color": "#64748b" },
        "layer": [
          {
            "params": [{
              "name": "brush",
              "select": {
                "type": "interval", 
                "encodings": ["x"], 
                "on": "[mousedown[event.shiftKey], window:mouseup] > mousemove", // Resize/Select with Shift
                "translate": "[mousedown[!event.shiftKey], window:mouseup] > mousemove", // Pan without Shift
                "zoom": false,   // Disables mouse-wheel zooming
                "clear": false   // Prevents clicking outside the box from deleting it
              },
              "value": { "x": ["2022-01-01", "2022-05-01"] } // The fixed 4-month window
            }],
            "mark": { "type": "bar", "color": "#FF9900", "opacity": 0.4 },
            "encoding": {
              "x": {
                "field": "date",
                "type": "temporal",
                "title": "Date",
                "axis": { "grid": false }
              },
              "y": {
                "field": "Bus",
                "type": "quantitative",
                "axis": { "labels": false, "ticks": false, "title": "" }
              }
            }
          },
          {
            "mark": { "type": "line", "color": "#0055FF", "opacity": 0.6 },
            "encoding": {
              "x": { "field": "date", "type": "temporal" },
              "y": { "field": "Rail", "type": "quantitative" }
            }
          }
        ]
      }
    ],
    "spacing": 20,
    "resolve": {
      "scale": { "x": "independent" }
    }
  };

  vegaEmbed("#ridership-focus-chart", vegaLiteSpec, { actions: false })
    .catch(console.error);
}