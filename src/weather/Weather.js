import React from 'react'
import message from "../localization/weather/CurrentWeatherLocal";
import Api from "../api/Api";
import WeatherComponent from "./WeatherComponent";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";


const Weather = (props) => {

    const [weather, setWeather] = React.useState(null);
    const [forecast, setForecast] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [permission, setPermission] = React.useState('');

    const Permission = {
        PROMPT: 'prompt',
        DENIED: 'denied',
        GRANTED: 'granted'
    }

    const handlePermission = () => {
        navigator.permissions.query({name:'geolocation'}).then(result => {
            setPermission(result.state);
            result.onchange = () => setPermission(result.state);
        });
    }

    const populateByLocation = React.useCallback(() => {
        if(!!(navigator.geolocation)) {
            navigator.geolocation.getCurrentPosition((position) =>
                getWeatherByCoords(position.coords.latitude, position.coords.longitude))
        }
    }, []);

    React.useEffect(() => {
        handlePermission();
    }, []);

    const populateByCity = React.useCallback(() => {
        Api.getIpLocation().then(location => {
            getWeatherByCity(location.city, location.country_code)
        }).catch(e => {
            if(permission !== Permission.PROMPT) {
                setError(message.geolocationDisabled);
                console.log(e);
            }
        });
    }, [permission, Permission.PROMPT]);

    const populate = React.useCallback(() => {
        setError(null);

        populateByLocation();

        if(permission === Permission.DENIED || permission === Permission.PROMPT || !navigator.geolocation){
            populateByCity();
        }
    }, [populateByLocation, populateByCity, permission, Permission.DENIED, Permission.PROMPT]);

    React.useEffect(() => {
        if(permission!=='') populate();
    }, [populate, permission]);



    const getWeatherByCoords = (lat, lon) => {
        Api.getWeatherByCoords(lat, lon, message.getLanguage())
            .then((weather) => setWeather(weather))
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });

        Api.getForecastByCoords(lat, lon, message.getLanguage())
            .then((forecast) => {
                setForecast(forecast);
                console.log(forecast);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    }

    const getWeatherByCity = (city, countryCode) => {
        Api.getWeatherByCity(city, countryCode, message.getLanguage())
            .then((weather) => setWeather(weather))
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    }

    return (
        <div style={{height: '100%', width: '100%'}}>
            {error && <Alert severity="error">{error}</Alert>}
            {!weather && permission === Permission.PROMPT && <Alert severity="info"><strong>{message.important}</strong>{" "+message.geolocationRequest}</Alert>}
            {weather ? <WeatherComponent
                    clicked={populate.bind(this)}
                    weather={weather}
                    forecast={forecast}
                />
                    :
                permission !== Permission.DENIED && <LinearProgress />}
        </div>
    )
}

export default Weather;
