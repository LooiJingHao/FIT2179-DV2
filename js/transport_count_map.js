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
      "background": "#A5D8FF", // Ocean Layer Blue
      "view": { "stroke": "transparent" },
      "legend": {
        "titleFontSize": 12,
        "labelFontSize": 11,
        "orient": "right",
        "offset": 20,
        "gradientLength": 220,
        "fillColor": "#F8FAFC", // Legend background for readability
        "padding": 10,
        "cornerRadius": 5
      }
    },

    "layer": [
      // Base layer for surrounding countries
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
          "fill": "#EDE9E1", // Sandy/Land color for other countries
          "stroke": "#CBD5E1",
          "strokeWidth": 0.5
        }
      },

      // Main choropleth layer
      {
        "data": {
          "url": "data/malaysia_states.topojson",
          "format": {
            "type": "topojson",
            "feature": "geoBoundaries-MYS-ADM1_simplified"
          }
        },

        "transform": [
          // Lookup transport counts
          {
            "lookup": "properties.shapeName",
            "from": {
              "data": { "url": "data/transport_count_by_state.csv" },
              "key": "State",
              "fields": ["bus_count", "lrt_count", "total_count"]
            }
          },
          // Lookup population data
          {
            "lookup": "properties.shapeName",
            "from": {
              "data": { "url": "data/state_population.csv" },
              "key": "State",
              "fields": ["population_2024"]
            }
          },
          // Normalize: Points per 1,000,000 people
          {
            "calculate": "isValid(datum.total_count) ? datum.total_count : 0",
            "as": "total_count_clean"
          },
          {
            "calculate": "(datum.total_count_clean / datum.population_2024) * 1000000",
            "as": "points_per_million"
          }
        ],

        "mark": {
          "type": "geoshape",
          "stroke": "#ffffff",
          "strokeWidth": 1
        },

        "encoding": {
          "color": {
            "field": "points_per_million",
            "type": "quantitative",
            "title": "Stations per 1M People",
            "scale": {
              "scheme": "blues"
            }
          },

          "tooltip": [
            { "field": "properties.shapeName", "type": "nominal", "title": "State" },
            { "field": "total_count_clean", "type": "quantitative", "title": "Total Stations/Terminals" },
            { "field": "population_2024", "type": "quantitative", "title": "Population", "format": "," },
            { 
              "field": "points_per_million", 
              "type": "quantitative", 
              "title": "Stations per 1M People", 
              "format": ".2f" 
            }
          ]
        }
      },

      // Annotation Layer (HD Requirement)
      {
        "data": {
          "values": [
            { "lat": 3.139, "lon": 101.6869, "label": "Kuala Lumpur: Highest Density" }
          ]
        },
        "layer": [
          {
            "mark": { "type": "text", "dy": -10, "fontWeight": "bold", "fontSize": 12 },
            "encoding": {
              "longitude": { "field": "lon", "type": "quantitative" },
              "latitude": { "field": "lat", "type": "quantitative" },
              "text": { "field": "label", "type": "nominal" }
            }
          },
          {
            "mark": { "type": "point", "color": "red", "size": 50 },
            "encoding": {
              "longitude": { "field": "lon", "type": "quantitative" },
              "latitude": { "field": "lat", "type": "quantitative" }
            }
          }
        ]
      }
    ]
  };

  embed("#transport-count-map", spec, { actions: false }).catch(console.error);
}