import LocalizedStrings from 'react-localization';

const local = new LocalizedStrings({
  en:{
		loading : "Loading...",
    humidity:"Humidity",
    wind:"Wind",
    important : "Important!",
    geolocationRequest : "We need your location to provide you the local weather.",
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
    geolocationRequest : "Necesitamos su ubicacion para poder brindarle el clima local.",
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

export default local
