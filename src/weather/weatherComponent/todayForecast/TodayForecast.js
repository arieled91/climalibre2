import React, {Fragment} from 'react'
import {fix, getLocalTime} from "../../Utils";

import "./TodayForecast.css"

const TodayForecast = ({forecasts, ...props}) => {

    return (
        <Fragment>
            {forecasts.map(forecast => (
                <Fragment  key={forecast.dt}>
                    <div className="forecast-background"/>
                    <div className="forecast-content">
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
                </Fragment>
            ))}
        </Fragment>
    )
}

export default TodayForecast;
