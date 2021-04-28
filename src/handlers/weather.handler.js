import message from '../localization/weather/WeatherLocal';
import * as Service from '../services/weather.service';

export const findByCoords = async (lat, lon) => {
  const [weatherResult, forecastResult] = await Promise.allSettled([
    Service.getWeatherByCoords(lat, lon, message.getLanguage()),
    Service.getForecastByCoords(lat, lon, message.getLanguage())
  ]);

  return {weather: weatherResult.value, forecast: forecastResult.value};
};

export const getPosition = () => new Promise(function(resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});


export const findByCity = async (city, countryCode) => {
  const location = await Service.getIpLocation();
  if (location) {
    const [weatherResult, forecastResult] = await Promise.allSettled([
      Service.getWeatherByCity(city, countryCode, message.getLanguage()),
      Service.getForecastByCity(city, countryCode, message.getLanguage())
    ]);

    return {weather: weatherResult.value, forecast: forecastResult.value};
  }
};
