import LocalizedStrings from 'react-localization';

const message = new LocalizedStrings({
  en: {
    locale: 'en',
    loading: "Loading...",
    humidity: "Humidity",
    feelsLike: "Feels Like",
    wind: "Wind",
    important: "Important!",
    geolocationRequest: "Grant location permission in your device to continue",
    geolocationDisabled: "Geolocation is disabled in your device",
    //cardinals
    north: "North",
    northEast: "Northeast",
    east: "East",
    southEast: "Southeast",
    south: "South",
    southWest: "Southwest",
    west: "West",
    northwest: "Northwest",
    station: "Station",
    noPrecipitations: "No precipitation expected",
    precipitations: (description, time) => `Expected ${description} at ${time}`
  },
  es: {
    locale: 'es',
    loading: "Cargando...",
    humidity: "Humedad",
    feelsLike: "Sensación térmica",
    wind: "Viento",
    important: "¡Importante!",
    geolocationRequest: "Para continuar conceda permisos de ubicación.",
    geolocationDisabled: "La geolocalización se encuentra deshabilitada en su dispositivo",
    //cardinals
    north: "Norte",
    northEast: "Noreste",
    east: "Este",
    southEast: "Sudeste",
    south: "Sur",
    southWest: "Sudoeste",
    west: "Oeste",
    northwest: "Noroeste",
    station: "Estación",
    noPrecipitations: "No se esperan precipitaciones",
    precipitations: (description, time) => `Se espera ${description} a las ${time}`
  }
});

export default message
