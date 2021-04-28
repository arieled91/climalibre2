import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER = URL + '/weather';
const FORECAST = URL + '/forecast';
const IP_LOCATION = 'https://ipapi.co/json';

const baseParams = {
  appid: 'bb08096af050f2bd4c2b401249b14e27', // OWM API ID
  units: 'metric'
};

export const getIpLocation = () => {
  return axios.get(IP_LOCATION)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getWeatherByCity = (zipCode, countryCode, language) => {
  return axios.get(WEATHER, {
    params: {
      ...baseParams,
      q: `${zipCode},${countryCode}`,
      lang: language
    }
  }).then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getWeatherByCoords = (latitude, longitude, language) => {
  return axios.get(WEATHER, {
    params: {
      ...baseParams,
      lat: latitude,
      lon: longitude,
      lang: language
    }
  }).then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getForecastByCity = (zipCode, countryCode, language) => {
  return axios.get(FORECAST, {
    params: {
      ...baseParams,
      q: `${zipCode},${countryCode}`,
      lang: language
    }
  }).then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getForecastByCoords = (latitude, longitude, language) => {
  return axios.get(FORECAST, {
    params: {
      ...baseParams,
      lat: latitude,
      lon: longitude,
      lang: language
    }
  }).then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

