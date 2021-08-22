var vlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: (980),
    data: {
      name: "covidUsStates",
      url: "getData.js"},
    mark:"bar",
    encoding: {
      x: {
      field:"date",
      type: "temporal",
      title: "Date",
      scale:{
        type: "time"
        }
      },
      
      y: {
          "bin": true,
          aggregate:"sum",
          type: "quantitative",
          field: "deaths",
          title: "Total number of deaths"
        },
      tooltip: [
        {field: "state", type: "ordinal", title: "State"},
        {field: "cases", type: "quantitative", title: "cases"},
        {field: "deaths", type: "quantitative", title: "deaths"}
      ],
      color:{
          field: "state",
          type: "nominal",
          opacity: 20
      }
    }
  }
  ;

  // Embed the visualization in the container with id `vis`
  vegaEmbed('#vis', vlSpec);
