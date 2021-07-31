const axios = require('axios').default;
const { print } = require('../utils/print');

module.exports = {
 getWeather,
 getFutureWeather,
}

/**
 * Get weather by city, return an object containing all the weather information
 * 
 * Example: 
 * {
  coord: { lon: 116.3972, lat: 39.9075 },
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  base: 'stations',
  main: {
    temp: 303.84,
    feels_like: 305.84,
    temp_min: 303.65,
    temp_max: 304.38,
    pressure: 994,
    humidity: 53,
    sea_level: 994,
    grnd_level: 989
  },
  visibility: 10000,
  wind: { speed: 1.86, deg: 167, gust: 2.08 },
  clouds: { all: 1 },
  dt: 1627705922,
  sys: {
    type: 2,
    id: 2000403,
    country: 'CN',
    sunrise: 1627679505,
    sunset: 1627730982
  },
  timezone: 28800,
  id: 1816670,
  name: 'Beijing',
  cod: 200
}
 */
async function getWeather(city) {
  print(`Query weather data of city "${city}"`)

  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: city,
      lat: '0',
      lon: '0',
    
      id: '2172797',
      lang: 'zh',
      units: '"metric" or "imperial"',
      mode: 'xml, html'
    },
    headers: {
      'x-rapidapi-key': '0480949b22msh490224bd3ee4a37p15d908jsnd4816b630264',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  const weatherData = response.data;

  print(`Successfully queried weather data of city "${city}"`)
  return weatherData;
}

/**
 * 
 * {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1628035200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.3,
      sys: [Object],
      dt_txt: '2021-08-04 00:00:00'
    },
    {
      dt: 1628046000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2021-08-04 03:00:00'
    },
    {
      dt: 1628056800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2021-08-04 06:00:00'
    },
    {
      dt: 1628132400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.02,
      sys: [Object],
      dt_txt: '2021-08-05 03:00:00'
    }
  ],
  city: {
    id: 1816670,
    name: 'Beijing',
    coord: { lat: 39.9075, lon: 116.3972 },
    country: 'CN',
    population: 1000000,
    timezone: 28800,
    sunrise: 1627679505,
    sunset: 1627730982
  }
}
 */
async function getFutureWeather(city) {
  print(`Query future weather data of city "${city}"`)
    
  var options = {
  method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: {q: city},
    headers: {
      'x-rapidapi-key': '0480949b22msh490224bd3ee4a37p15d908jsnd4816b630264',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
  };  

  const response = await axios.request(options);
  const weatherData_str = response.data;

  print(`Successfully queried future weather data of city "${city}"`)
  return weatherData_str;
}
