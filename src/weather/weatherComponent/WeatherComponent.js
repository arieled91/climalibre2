import React, {Fragment} from 'react';
import message from '../../localization/weather/WeatherLocal';
import Typography from '@material-ui/core/Typography';

import styles from './WeatherComponent.module.css';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import {classes, degreesToCardinal, fix, getLocalTime, isDayTime, min} from '../Utils';
import TodayForecast from './todayForecast/TodayForecast';
import WeatherIcon from './weatherIcon/WeatherIcon';
import {Forecast, Weather} from "../WeatherModel";

const WeatherComponent = ({weather, forecast}) => {
  const [todayForecast, setTodayForecast] = React.useState([]);
  const [nextRain, setNextRain] = React.useState(null);

  const tomorrow = () => {
    const hours24 = new Date();
    hours24.setHours(hours24.getHours()+24);

    const tomorrowMorning = new Date();
    tomorrowMorning.setHours(7, 0, 0, 0);
    tomorrowMorning.setDate(tomorrowMorning.getDate() + 1);

    return min(hours24, tomorrowMorning);
  };

  React.useEffect(() => {
    if (forecast) {
      const forecastForToday = forecast.list.filter((w) => w.dt * 1000 < tomorrow());
      setTodayForecast(forecastForToday);
      setNextRain(forecastForToday.find((f) => f.weather[0].main === 'Rain'));
    }
  }, [forecast]);

  const nextRainMessage = (nextRainForecast) => {
    return message.precipitations(nextRainForecast.weather[0].description, getLocalTime(nextRain.dt * 1000));
  }

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <BackgroundImage weather={weather}/>
      </div>
      <div className={classes(styles.weatherComponent, styles.mainComponent)}>
        <div className={styles.currentWeather}>
          <div>
            <Typography variant="caption" style={{
              fontSize: '10pt',
              color: 'rgba(255,255,255,0.69)',
            }}>{weather.name}</Typography>
          </div>
          <div className={styles.capitalize}>
            <Typography variant="h5" gutterBottom style={{marginBottom: '-5px'}}>
              <b>{weather.weather[0].description}</b>
            </Typography>
          </div>
          <div>
            <div>
              <div >
                <div className={styles.temp}>
                  <WeatherIcon
                    isDayTime={isDayTime(weather)}
                    weatherCode={weather.weather[0].id}
                    color="white"
                  />
                  {fix(weather.main.temp) + '°C'}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="body1" gutterBottom>
              {message.feelsLike}: <strong>{fix(weather.main.feels_like) + 'º'}</strong>
            </Typography>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              {message.humidity}: <strong>{fix(weather.main.humidity) + '%'}</strong>
            </Typography>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              {message.wind}: <strong>{
                fix(weather.wind.speed) + ' km/h ' + degreesToCardinal(weather.wind.deg)
              }</strong>
            </Typography>
          </div>
          {weather.weather[0].main !== 'Rain' && <div>
            <Typography variant="body1" gutterBottom>
              <b>{nextRain ? nextRainMessage(nextRain) : message.noPrecipitations}</b>
            </Typography>
          </div>}
        </div>
        <div className={classes(styles.hideScrollbar, styles.forecastContainer)}>
          <TodayForecast weather={weather} forecasts={todayForecast}/>
        </div>
      </div>
    </div>
  );
};

WeatherComponent.propTypes = {
  weather: Weather,
  forecast: Forecast,
};

export default WeatherComponent;
