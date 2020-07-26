import Axios from 'axios';

export default class Api {

	static OWM_API_ID = "bb08096af050f2bd4c2b401249b14e27";
	static URL = "https://api.openweathermap.org/data/2.5";
	static WEATHER = this.URL+"/weather";
	static FORECAST = this.URL+"/forecast";
	static IP_LOCATION = "https://ipapi.co/json"

	static baseParams = {
		appid: this.OWM_API_ID,
		units: "metric",
	}

	static async getIpLocation() {
		return await Axios.get(this.IP_LOCATION)
			.then(response => response.data);
	}

	static async getWeatherByCity(zipCode, countryCode, language) {
		return await Axios.get(this.WEATHER, {
			params: {
				...this.baseParams,
				q: `${zipCode},${countryCode}`,
				lang: language
			}
		}).then(response => response.data);
	}

	static async getWeatherByCoords(latitude, longitude, language) {
		return await Axios.get(this.WEATHER, {
			params: {
				...this.baseParams,
				lat: latitude,
				lon: longitude,
				lang: language
			}
		}).then(response => response.data);
	}

	static async getForecastByCity(zipCode, countryCode, language) {
		return await Axios.get(this.FORECAST, {
			params: {
				...this.baseParams,
				q: `${zipCode},${countryCode}`,
				lang: language
			}
		}).then(response => response.data);
	}

	static async getForecastByCoords(latitude, longitude, language) {
		return await Axios.get(this.FORECAST, {
			params: {
				...this.baseParams,
				lat: latitude,
				lon: longitude,
				lang: language
			}
		}).then(response => response.data);
	}
}
