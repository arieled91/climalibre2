import React, {Fragment} from 'react'
import {fix, getLocalTime, isDayTime} from "../../Utils";

import "./TodayForecast.css"
import WeatherIcon from "../weatherIcon/WeatherIcon";

const TodayForecast = ({weather, forecasts, ...props}) => {

    return (
        <Fragment>
            {forecasts.map(forecast => (
                <Fragment  key={forecast.dt}>
                    <div className="forecast-background"/>
                    <div className="forecast-content">
                        <div style={{display:'inline-block', textAlign: 'center'}}>
                            <WeatherIcon
                                isDayTime={isDayTime(weather)}
                                weatherCode={forecast.weather[0].id}
                                size="30"
                                color="white"
                            />
                            {/*<img style={{marginBottom: '-10px', marginTop: '-5px', width: '35px'}} alt="" src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/>*/}
                            <span className="temp"><strong>{fix(forecast.main.temp) + '°'}</strong></span>
                        </div>
                        <div>
                            <strong style={{fontSize: '9pt'}}>{getLocalTime(forecast.dt * 1000)}</strong>
                        </div>
                    </div>
                </Fragment>
            ))}
        </Fragment>
    )
}

export default TodayForecast;
