var vlSpec ={
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    align: "center",
    width: 1000,
    data:{
        url: "https://raw.githubusercontent.com/vega/vega/master/docs/data/seattle-weather.csv",
        async: true
    },
    layer:[
    {
        mark: {
            type: "bar",
            tooltip: true,
            color: "#7a7a7a",
            opacity: .2
        },
        encoding:{
            x: {
                timeUnit: "month",
                field: "date",
                type: "ordinal"
            },
            y: {
                field: "precipitation",
                type: "quantitative",
                aggregate: "mean"
                }
            }
    },
    {
        mark: {
            type: "line",
            tooltip: true,
            color: "red",
            opacity: .6
        },
        encoding:{
            x: {
                timeUnit: "month",
                field: "date",
                type: "ordinal"
            },
            y: {
                field: "temp_max",
                type: "quantitative",
                aggregate: "mean"
                }            
            }
    },
    {
        mark: {
            type: "line",
            point: true,
            tooltip: {content:"data"},
            color: "blue",
            opacity: .6
        },
        encoding:{
            x: {
                timeUnit: "month",
                field: "date",
                type: "ordinal"
            },
            y: {
                field: "temp_min",
                type: "quantitative",
                aggregate: "mean"
                }            
            }
    }
    ]
}
vegaEmbed('#vis', vlSpec);