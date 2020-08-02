import React, {Fragment} from 'react'
import message from "../localization/weather/CurrentWeatherLocal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import cloudyImgMin from "./../assets/cloudy-sky-min.jpg";
import drizzleImgMin from "./../assets/drizzle-min.jpg";
import drizzleNightImgMin from "./../assets/drizzle-night-min.jpg";
import fogImgMin from "./../assets/fog-min.jpg";
import rainyImgMin from "./../assets/rainy-day-min.jpg";
import snowImgMin from "./../assets/snow-min.jpg";
import stormImgMin from "./../assets/storm-min.jpg";
import sunnyImgMin from "./../assets/sunny-min.jpg";
import coveredImgMin from "./../assets/covered-min.jpg";
import clearSkyNightImgMin from "./../assets/clear-sky-night-min.jpg";
import cloudySkyNightImgMin from "./../assets/cloudy-sky-night-min.jpg";
import fogNightImgMin from "./../assets/fog-night-min.jpg";
import snowNightImgMin from "./../assets/snow-night-min.jpg";
import coveredNightImgMin from "./../assets/covered-night-min.jpg";
import rainyNightImgMin from "./../assets/rainy-night-min.jpg";
import cloudyImg from "./../assets/cloudy-sky.jpg";
import drizzleImg from "./../assets/drizzle.jpg";
import drizzleNightImg from "./../assets/drizzle-night.jpg";
import fogImg from "./../assets/fog.jpg";
import rainyImg from "./../assets/rainy-day.jpg";
import snowImg from "./../assets/snow.jpg";
import stormImg from "./../assets/storm.jpg";
import sunnyImg from ".././assets/sunny.jpg";
import coveredImg from "./../assets/covered.jpg";
import clearSkyNightImg from "./../assets/clear-sky-night.jpg";
import cloudySkyNightImg from "./../assets/cloudy-sky-night.jpg";
import fogNightImg from "./../assets/fog-night.jpg";
import snowNightImg from "./../assets/snow-night.jpg";
import coveredNightImg from "./../assets/covered-night.jpg";
import rainyNightImg from "./../assets/rainy-night.jpg";

import './WeatherComponent.css';

const WeatherComponent = (props) => {
    const weather = props.weather;

    const [image, setImage] = React.useState({min: '', full: ''});
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [todayForecast, setTodayForecast] = React.useState([]);

    const isDayTime = React.useCallback(() => {
        const sunrise = weather.sys.sunrise * 1000;
        const sunset = weather.sys.sunset * 1000;
        const now = new Date().getTime();
        return now > sunrise && now < sunset;
    }, [weather])

    const calculateImage = React.useCallback(() => {
        if (!weather) return null;
        const id = weather.weather[0].id;
        const code = ('' + id)[0];
        const day = isDayTime();

        switch (code) {
            case '2':
                return {full: stormImg, min: stormImgMin};
            case '3':
                return day ? {full: drizzleImg, min: drizzleImgMin} : {full: drizzleNightImg, min: drizzleNightImgMin};
            case '5':
                return day ? {full: rainyImg, min: rainyImgMin} : {full: rainyNightImg, min: rainyNightImgMin};
            case '6':
                return day ? {full: snowImg, min: snowImgMin} : {full: snowNightImg, min: snowNightImgMin};
            case '7':
                return day ? {full: fogImg, min: fogImgMin} : {full: fogNightImg, min: fogNightImgMin};
            case '8':
                if (id === 800 || id === 801) return day ? {full: sunnyImg, min: sunnyImgMin} : {
                    full: clearSkyNightImg,
                    min: clearSkyNightImgMin
                };
                if (id === 802 || id === 803) return day ? {
                    full: cloudyImg,
                    min: cloudyImgMin
                } : {full: cloudySkyNightImg, min: cloudySkyNightImgMin};
                return day ? {full: coveredImg, min: coveredImgMin} : {full: coveredNightImg, min: coveredNightImgMin};
            default:
                return {full: cloudyImg, min: cloudyImgMin};
        }

    }, [isDayTime, weather])

    React.useEffect(() => {
        setImage(calculateImage());
    }, [calculateImage, props.weather])


    const degreesToCardinal = (deg) => {
        const cardinals = [
            message.north,
            message.northEast,
            message.east,
            message.southEast,
            message.south,
            message.southWest,
            message.west,
            message.northwest,
            message.north
        ];

        return cardinals[parseFloat((deg % 360) / 45).toFixed(0)];
    }

    const tomorrow = () => {
        let date = new Date()
        date.setHours(7, 0, 0, 0);
        date.setDate(date.getDate() + 1)
        return date;
    }

    React.useEffect(() => {
        if (props.forecast) {
            setTodayForecast(props.forecast.list.filter(w => w.dt * 1000 < tomorrow()));//.slice(0, 3));
        }
    }, [props.forecast])

    const fix = (temp, digits = 0) => {
        return parseFloat(temp).toFixed(digits);
    }

    const getLocalTime = (time) => {
        const stringTime = new Date(time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
        return stringTime.charAt(0) === '0' ? stringTime.substr(1) : stringTime;
    }

    const styles = {
        heightSmall: {
            height: '15px'
        },
        heightMedium: {
            height: '28px'
        },
        temp: {
            fontSize: '55pt',
            verticalAlign: 'middle'
        },
        middle: {
            verticalAlign: 'middle'
        }
    }

    return (
        <Fragment>
            <div>
                {/*{!imageLoaded && <img className="image thumb" src={image.min} alt=''/>}*/}
                {!imageLoaded && <img className="image thumb" src={image.min} alt=''/>}
                <img className="image full" src={image.full} alt='' onLoad={() => setImageLoaded(true)}/>
            </div>
            <div className="weather-component main-component">
                <Grid container direction="column" justify="center" alignItems="center" className="fullHeight">
                    <Grid item>
                        <Typography variant="caption" style={{
                            fontSize: '10pt',
                            color: 'rgba(255,255,255,0.69)'
                        }}>{weather.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" gutterBottom className="capitalize" style={{marginBottom: '-5px'}}>
                            {weather.weather[0].description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant='h4' style={styles.temp}>
                                    <img alt=""
                                         src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
                                    {fix(weather.main.temp) + "°C"}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Grid item style={{fontSize: '20pt'}}>
                                        {fix(weather.main.temp_max) + '°'}
                                    </Grid>
                                    <Grid item style={{fontSize: '20pt'}}>
                                        {fix(weather.main.temp_min) + '°'}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                            {message.feelsLike}: <strong>{fix(weather.main.feels_like) + "º"}</strong>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                            {message.humidity}: <strong>{fix(weather.main.humidity) + "%"}</strong>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                            {message.wind}: <strong>{fix(weather.wind.speed) + " km/h " + degreesToCardinal(weather.wind.deg)}</strong>
                        </Typography>
                    </Grid>
                </Grid>
                <div className="hide-scrollbar extra-shadow forecastContainer">
                    {todayForecast.map(forecast => (
                        <div key={forecast.dt} className="forecast-content">
                            <div className="capitalize forecast-title">
                                {forecast.weather[0].description}
                            </div>
                            <div style={{display:'inline-block', textAlign: 'center'}}>
                                <img style={{marginBottom: '-10px', marginTop: '-5px', width: '35px'}}
                                     alt="" src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>
                                <span style={{
                                    position: "relative",
                                    bottom: '4px'
                                }}><strong>{fix(forecast.main.temp) + '°'}</strong></span>
                            </div>
                            <div>
                                <strong style={{fontSize: '9pt'}}>{getLocalTime(forecast.dt * 1000)}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}


export default WeatherComponent;
