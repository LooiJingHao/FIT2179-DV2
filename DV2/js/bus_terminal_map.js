import embed from "vega-embed";

export function bus_terminal_map() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 850,
    "height": 460,

    "projection": {
      "type": "mercator",
      "center": [109.2, 4.2],
      "scale": 2300
    },

    "config": {
      "background": "#dceefb",
      "view": {
        "stroke": "transparent"
      },
      "legend": {
        "titleFontSize": 12,
        "labelFontSize": 11
      }
    },

    "layer": [
      {
        "data": {
          "url": "/data/ne_10m_admin_0_countries.topojson",
          "format": {
            "type": "topojson",
            "feature": "ne_10m_admin_0_countries"
          }
        },
        "mark": {
          "type": "geoshape",
          "fill": "#f5f1e8",
          "stroke": "#b8b8b8",
          "strokeWidth": 0.6
        }
      },

      {
        "data": {
          "url": "/data/malaysia_states.topojson",
          "format": {
            "type": "topojson",
            "feature": "geoBoundaries-MYS-ADM1_simplified"
          }
        },

        "transform": [
          {
            "lookup": "properties.shapeName",
            "from": {
              "data": {
                "url": "/data/bus_terminal_count_by_state.csv"
              },
              "key": "State",
              "fields": ["terminal_count"]
            }
          },
          {
            "calculate": "isValid(datum.terminal_count) ? datum.terminal_count : 0",
            "as": "terminal_count_clean"
          }
        ],

        "mark": {
          "type": "geoshape",
          "stroke": "#ffffff",
          "strokeWidth": 1.1
        },

        "encoding": {
          "color": {
            "field": "terminal_count_clean",
            "type": "quantitative",
            "title": "Bus Terminals",
            "scale": {
              "scheme": "blues"
            },
            "legend": {
              "orient": "right",
              "offset": 20,
              "gradientLength": 230
            }
          },

          "tooltip": [
            {
              "field": "properties.shapeName",
              "type": "nominal",
              "title": "State"
            },
            {
              "field": "terminal_count_clean",
              "type": "quantitative",
              "title": "Number of Terminals"
            }
          ]
        }
      }
    ]
  };

  embed("#bus-terminal-map", spec, { actions: false }).catch(console.error);
}