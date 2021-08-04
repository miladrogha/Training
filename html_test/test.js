async function drawLineChart(){
    const dataset = await d3.json("nyc_weather_data.json")
    console.log(dataset)
}


drawLineChart()
