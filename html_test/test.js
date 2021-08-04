async function drawLineChart(){
    const dataset = await d3.json("http://localhost:8080/nyc_weather_data.json")
    console.log(dataset)
}


drawLineChart()
