import Axios from 'axios';

export default class Api {

	static WEATHER = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";

	static HEADERS = {
		'Access-Control-Allow-Origin':'*',
		'Access-Control-Allow-Credential':'true',
		'Access-Control-Allow-Methods': 'GET'
	}

	static async getWeather(latitude, longitude, language) {
		return await Axios.get(this.WEATHER, {
			headers: this.HEADERS,
			params: {
				appid: "bb08096af050f2bd4c2b401249b14e27",
				units: "metric",
				lat: latitude,
				lon: longitude,
				lang: language
			}
		}).then(response => response.data);
	}


  static instance(latitude, longitude,language) {

	// const URL_PROD_OW = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
	const URL_PROD_OW = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";

    return Axios.create({
      baseURL: URL_PROD_OW,
      // timeout: 5000
			headers: {
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Credential':'true',
				'Access-Control-Allow-Methods': 'GET'
      },
			params:{
				appid: "bb08096af050f2bd4c2b401249b14e27",
				units: "metric",
				lat: latitude,
				lon: longitude,
				lang: language
			}
    });
  }
}
