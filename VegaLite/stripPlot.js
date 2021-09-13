var stripPlot = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: (980),
    data: {
      name: "covidUsStates",
      url: "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv"},
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
          aggregate:"sum",
          type: "quantitative",
          field: "deaths",
          title: "Total number of deaths"
        },
      tooltip: [
        {field: "cases", type: "quantitative", title: "cases"},
        {field: "deaths", type: "quantitative", title: "deaths"}
      ]
    }
  };

  // Embed the visualization in the container with id `vis`
  vegaEmbed('#stripPlot', stripPlot);
