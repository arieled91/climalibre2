import React from 'react'
import message from "../localization/weather/CurrentWeatherLocal";
import Api from "../api/Api";
import WeatherComponent from "./WeatherComponent";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";


const Weather = (props) => {

    const [weather, setWeather] = React.useState(null);
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

    const populate = () => {
        if(!!(navigator.geolocation)) {
            navigator.geolocation.getCurrentPosition(
                (position) =>
                    getCurrentWeather(position.coords.latitude, position.coords.longitude)
                )
        } else {
            setError(message.geolocationDisabled)
            console.log("Geolocation is not available");
        }
    }

    React.useEffect(() => {
        handlePermission();
        populate();
    }, []);

    React.useEffect(() => {
        if(permission === Permission.DENIED) setError(message.geolocationRequest);
        if(permission === Permission.PROMPT) setError(null);
    }, [permission]);



    const getCurrentWeather = (lat, lon) => {
        Api.getWeather(lat, lon, message.getLanguage())
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
            {weather ? <WeatherComponent weather={weather}/> :
                permission !== Permission.DENIED && <LinearProgress />}
        </div>
    )
}

export default Weather;
