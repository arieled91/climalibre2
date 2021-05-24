import axios from 'axios';

const {
  REACT_APP_WEATHER: WEATHER,
  REACT_APP_FORECAST: FORECAST,
  REACT_APP_IP_LOCATION: IP_LOCATION,
  REACT_APP_API_KEY: API_KEY
} = process.env;

const baseParams = {
  appid: API_KEY, // OWM API ID
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

