const axios = require('axios');

async function getWeather(request, response){

    try{
const {lat, lon } = req.query;
let url = `${process.env.SECRET_WEATHER_PASSWORD}/weather?lat=${lat}&lon=${lon}`;
const res = await axios.get(url)
const niceData = res.data.data.map(weather => new Forecast(weather));
response.status(200).send(niceData);
    } catch(event){
        response.status(500).send('server error');
    }

class Forecast {
    constructor(obj){
        this.date = obj.datetime;
        this.description = obj.description;
        }
    }
}
module.exports = getWeather;