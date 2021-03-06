import React, {Fragment} from 'react';
import {fix, getLocalTime, isDayTime} from '../../utils/Util';

import styles from './TodayForecast.module.css';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import {Weather} from '../../domain/weather.model';
import PropTypes from 'prop-types';

const TodayForecast = ({weather, forecasts}) => {
  return (
    <div className={styles.container}>
      {forecasts.map((forecast) => (
        <Fragment key={forecast.dt}>
          <div className={styles.content}>
            <div className={styles.firstRow}>
              <WeatherIcon
                isDayTime={isDayTime(weather)}
                weatherCode={forecast.weather[0].id}
                size={30 * 2} // avoid canvas pixelation
                color="white"
              />
              <span className={styles.temp}>
                <strong>{fix(forecast.main.temp) + '°'}</strong>
              </span>
            </div>
            <div className={styles.time}>
              <strong>{getLocalTime(forecast.dt * 1000)}</strong>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

TodayForecast.propTypes = {
  weather: Weather,
  forecasts: PropTypes.array
};

export default TodayForecast;
