import React, {Fragment} from 'react';
import {fix, getLocalTime, isDayTime} from '../../../utils/Util';

import styles from './TodayForecast.module.css';
import WeatherIcon from '../weatherIcon/WeatherIcon';
import {Weather} from '../../WeatherModel';
import PropTypes from 'prop-types';

const TodayForecast = ({weather, forecasts}) => {
  return (
    <div className={styles.todayForecast}>
      {forecasts.map((forecast) => (
        <Fragment key={forecast.dt}>
          <div className={styles.forecastContent}>
            <div style={{display: 'flex', textAlign: 'center'}}>
              <WeatherIcon
                isDayTime={isDayTime(weather)}
                weatherCode={forecast.weather[0].id}
                size={30}
                color="white"
              />
              <span className={styles.temp}>
                <strong>{fix(forecast.main.temp) + '°'}</strong>
              </span>
            </div>
            <div>
              <strong style={{fontSize: '9pt'}}>{getLocalTime(forecast.dt * 1000)}</strong>
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
