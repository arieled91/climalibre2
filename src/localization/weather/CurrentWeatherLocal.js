import LocalizedStrings from 'react-localization';

const message = new LocalizedStrings({
  en:{
		loading : "Loading...",
    humidity:"Humidity",
    wind:"Wind",
    important : "Important!",
    geolocationRequest : "Grant location permission in your device to continue",
    geolocationDisabled : "Geolocation is disabled in your device",
    //cardinals
    north:"North",
    northEast: "Northeast",
    east: "East",
    southEast: "Southeast",
    south:"South",
    southWest:"Southwest",
    west:"West",
    northwest:"Northwest",
    station:"Station"
  },
  es: {
  	loading : "Cargando...",
    humidity:"Humedad",
    wind:"Viento",
    important : "¡Importante!",
    geolocationRequest : "Para continuar conceda permisos de ubicación.",
    geolocationDisabled : "La geolocalización se encuentra deshabilitada en su dispositivo",
    //cardinals
    north:"Norte",
    northEast: "Noreste",
    east: "Este",
    southEast: "Sudeste",
    south:"Sur",
    southWest:"Sudoeste",
    west:"Oeste",
    northwest:"Noroeste",
    station:"Estación"
  }
});

export default message
