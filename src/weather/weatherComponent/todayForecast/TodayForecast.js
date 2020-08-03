import React, {Fragment} from 'react'
import {fix, getLocalTime, isDayTime} from "../../Utils";

import "./TodayForecast.css"
import WeatherIcon from "../weatherIcon/WeatherIcon";

const TodayForecast = ({weather, forecasts, ...props}) => {

    return (
        <div className="today-forecast">
            {forecasts.map(forecast => (
                <Fragment  key={forecast.dt}>
                    <div className="forecast-content">
                        <div style={{display:'flex', textAlign: 'center'}}>
                            <WeatherIcon
                                isDayTime={isDayTime(weather)}
                                weatherCode={forecast.weather[0].id}
                                size={30}
                                color="white"
                            />
                            <span className="temp"><strong>{fix(forecast.main.temp) + '°'}</strong></span>
                        </div>
                        <div>
                            <strong style={{fontSize: '9pt'}}>{getLocalTime(forecast.dt * 1000)}</strong>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default TodayForecast;
