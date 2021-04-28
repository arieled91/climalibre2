import React from 'react';
import message from '../../localization/weather/WeatherLocal';

import styles from './WeatherDetail.module.css';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import {classes, degreesToCardinal, fix, getLocalTime, isDayTime, min} from '../../utils/Util';
import TodayForecast from './todayForecast/TodayForecast';
import WeatherIcon from './weatherIcon/WeatherIcon';
import {Forecast, Weather} from '../WeatherModel';

const WeatherDetail = ({weather, forecast}) => {
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
  };

  const dateTime = () => {
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    return new Date().toLocaleString(message.locale, options);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <BackgroundImage weather={weather}/>
      </div>


      <div className={classes(styles.weatherComponent, styles.mainComponent)}>

        <div className={styles.date}>{dateTime()}</div>

        <div className={styles.currentWeather}>
          <div className={classes(styles.item, styles.address)}>
            {weather.name}
          </div>

          <div className={styles.description}>
            <b>{weather.weather[0].description}</b>
          </div>

          <div className={styles.temp}>
            <WeatherIcon
              isDayTime={isDayTime(weather)}
              weatherCode={weather.weather[0].id}
              color="white"
            />
            {fix(weather.main.temp) + '°C'}
          </div>

          <div className={styles.item}>
            {message.feelsLike}: <strong>{fix(weather.main.feels_like) + 'º'}</strong>
          </div>
          <div className={styles.item}>
            {message.humidity}: <strong>{fix(weather.main.humidity) + '%'}</strong>
          </div>
          <div className={styles.item}>
            {message.wind}: <strong>{
              fix(weather.wind.speed) + ' km/h ' + degreesToCardinal(weather.wind.deg)
            }</strong>
          </div>
          {weather.weather[0].main !== 'Rain' && todayForecast.length > 0 && <div className={styles.item}>
            <b>{nextRain ? nextRainMessage(nextRain) : message.noPrecipitations}</b>
          </div>}
        </div>
        <div className={classes(styles.hideScrollbar, styles.forecastContainer)}>
          <TodayForecast weather={weather} forecasts={todayForecast}/>
        </div>
      </div>
    </div>
  );
};

WeatherDetail.propTypes = {
  weather: Weather,
  forecast: Forecast
};

export default WeatherDetail;
