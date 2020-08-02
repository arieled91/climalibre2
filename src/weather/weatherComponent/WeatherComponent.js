import React, {Fragment} from 'react'
import message from "../../localization/weather/CurrentWeatherLocal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import './WeatherComponent.css';
import BackgroundImage from "../backgroundImage/BackgroundImage";
import {degreesToCardinal, fix} from "../Utils";
import TodayForecast from "./todayForecast/TodayForecast";

const WeatherComponent = ({weather, ...props}) => {

    const [todayForecast, setTodayForecast] = React.useState([]);

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
            <BackgroundImage weather={weather}/>
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
                            <b>{weather.weather[0].description}</b>
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
                <div className="hide-scrollbar forecast-container">
                    <TodayForecast forecasts={todayForecast}/>
                </div>
            </div>
        </Fragment>
    )
}


export default WeatherComponent;
