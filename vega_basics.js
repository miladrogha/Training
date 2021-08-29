var vlTick ={
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 1000,
    align: "center",
    data:{
        url: "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json",
        async: true
    },
    mark:{
        type: "tick",
        tooltip: true
    },
    encoding:{
        y: {
            field: "Miles_per_Gallon",
            type: "quantitative"
        },
        x:{
            field: "Cylinders",
            type: "ordinal",
            axis: {grid: true, tickBand: "extent", labelAngle: 0}
        }
    }
}
vegaEmbed('#vis0', vlTick);

//Bar chart
var vlBar ={
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    align: "center",
    width: 1000,
    data:{
        url: "https://raw.githubusercontent.com/vega/vega/master/docs/data/seattle-weather.csv",
        async: true
    },
    mark:{
        type: "bar",
        tooltip: true
    },
    encoding:{
        x: {
            timeUnit:"month",
            field: "date",
            type: "temporal"
        },
        y:{
            field: "temp_max",
            type: "quantitative",
            aggregate: "mean",
            scale:{
                domain: [0,40]
            }
        }
    }
}
vegaEmbed('#vis1', vlBar);

//Scatterplot
var vlScatter ={
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    align: "center",
    width: 1000,
    data:{
        url: "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json",
        async: true
    },
    mark:{
        type: "point",
        tooltip: true
    },
    encoding:{
        y: {
            field: "Miles_per_Gallon",
            type: "quantitative"
        },
        x:{
            field: "Horsepower",
        }
    }
}
vegaEmbed('#vis2', vlScatter);


//Multilayer chart
var vlSpec ={
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    align: "center",
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
vegaEmbed('#vis8', vlSpec);