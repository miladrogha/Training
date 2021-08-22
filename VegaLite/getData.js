import {csv} from 'd3';

const csvUrl = "https://raw.githubusercontent.com/nytimes/covid-19-data/e371d1b40449e2b2916955e443ab75fbc235a828/us-states.csv";

export const getData = async () => {
    const data = await csv(csvUrl);
    console.log(data[0]);
    return data;
};
