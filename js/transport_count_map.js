import embed from "vega-embed";

export function transport_count_map() {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

    "width": 860,
    "height": 470,

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
          "url": "data/ne_10m_admin_0_countries.topojson",
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
          "url": "data/malaysia_states.topojson",
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
                "url": "data/transport_count_by_state.csv"
              },
              "key": "State",
              "fields": ["bus_count", "lrt_count", "total_count"]
            }
          },
          {
            "calculate": "isValid(datum.total_count) ? datum.total_count : 0",
            "as": "total_count_clean"
          }
        ],

        "mark": {
          "type": "geoshape",
          "stroke": "#ffffff",
          "strokeWidth": 1.2
        },

        "encoding": {
          "color": {
            "field": "total_count_clean",
            "type": "quantitative",
            "title": "Transport Count",
            "scale": {
              "scheme": "blues"
            },
            "legend": {
              "orient": "right",
              "offset": 20,
              "gradientLength": 220
            }
          },

          "tooltip": [
            {
              "field": "properties.shapeName",
              "type": "nominal",
              "title": "State"
            },
            {
              "field": "bus_count",
              "type": "quantitative",
              "title": "Bus Terminals"
            },
            {
              "field": "lrt_count",
              "type": "quantitative",
              "title": "LRT Stations"
            },
            {
              "field": "total_count_clean",
              "type": "quantitative",
              "title": "Total Count"
            }
          ]
        }
      }
    ]
  };

  embed("#transport-count-map", spec, { actions: false }).catch(console.error);
}