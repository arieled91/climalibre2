import React from 'react'
import local from "../localization/weather/CurrentWeatherLocal";
import Api from "../api/Api";
import WeatherComponent from "./WeatherComponent";
import Alert from "@material-ui/lab/Alert";


const CurrentWeather = (props) => {

    const [weather, setWeather] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [permissionInfo, setPermissionInfo] = React.useState(false);

    const handlePermission = () => {
        if(!navigator.geolocation) console.log("Geolocation is not available");
        navigator.permissions.query({name:'geolocation'}).then(result => {
            handlePermissionResult(result);
            result.onchange = () => handlePermissionResult(result);
        });
    }

    const populate = () => {
        if(!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                //ON_SUCCESS
                (position) =>
                    getCurrentWeather(position.coords.latitude, position.coords.longitude)
                )
        }
        else {
            console.log("Geolocation is not available");
        }
    }

    React.useEffect(() => {
        handlePermission();
        // populate();
    }, []);



    const getCurrentWeather = (lat, lon) => {
        Api.getWeather(lat, lon, local.getLanguage())
            .then((weather) => setWeather(weather))
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    }



    const handlePermissionResult = (result) => {
        switch (result.state) {
            case "denied":
                setPermissionInfo(false);
                setError(local.geolocationRequest);
                break;
            case "granted":
                setPermissionInfo(false);
                navigator.geolocation.getCurrentPosition(
                    (position) => getCurrentWeather(position.coords.latitude, position.coords.longitude)
                );
                break;
            case "prompt":
                setPermissionInfo(true);
                break;
            default: break;
        }
    }

    return (
        <div onClick={populate} style={{height: '100%', width: '100%'}}>
            {error && <Alert severity="error">{error}</Alert>}
            {permissionInfo && !error && <Alert severity="info"><strong>{local.important}</strong>{" "+local.geolocationRequest}</Alert>}
            <WeatherComponent weather={weather}/>
        </div>
    )
}



export default CurrentWeather;
