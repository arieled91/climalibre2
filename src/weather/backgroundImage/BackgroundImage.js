import React from 'react';

import cloudyImgMin from '../../assets/cloudy-sky-min.jpg';
import drizzleImgMin from '../../assets/drizzle-min.jpg';
import drizzleNightImgMin from '../../assets/drizzle-night-min.jpg';
import fogImgMin from '../../assets/fog-min.jpg';
import rainyImgMin from '../../assets/rainy-day-min.jpg';
import snowImgMin from '../../assets/snow-min.jpg';
import stormImgMin from '../../assets/storm-min.jpg';
import sunnyImgMin from '../../assets/sunny-min.jpg';
import coveredImgMin from '../../assets/covered-min.jpg';
import clearSkyNightImgMin from '../../assets/clear-sky-night-min.jpg';
import cloudySkyNightImgMin from '../../assets/cloudy-sky-night-min.jpg';
import fogNightImgMin from '../../assets/fog-night-min.jpg';
import snowNightImgMin from '../../assets/snow-night-min.jpg';
import coveredNightImgMin from '../../assets/covered-night-min.jpg';
import rainyNightImgMin from '../../assets/rainy-night-min.jpg';
import cloudyImg from '../../assets/cloudy-sky.jpg';
import drizzleImg from '../../assets/drizzle.jpg';
import drizzleNightImg from '../../assets/drizzle-night.jpg';
import fogImg from '../../assets/fog.jpg';
import rainyImg from '../../assets/rainy-day.jpg';
import snowImg from '../../assets/snow.jpg';
import stormImg from '../../assets/storm.jpg';
import sunnyImg from '../../assets/sunny.jpg';
import coveredImg from '../../assets/covered.jpg';
import clearSkyNightImg from '../../assets/clear-sky-night.jpg';
import cloudySkyNightImg from '../../assets/cloudy-sky-night.jpg';
import fogNightImg from '../../assets/fog-night.jpg';
import snowNightImg from '../../assets/snow-night.jpg';
import coveredNightImg from '../../assets/covered-night.jpg';
import rainyNightImg from '../../assets/rainy-night.jpg';

import './BackgroundImage.css';
import {isDayTime} from '../Utils';
import {Weather} from "../WeatherModel";

const BackgroundImage = ({weather}) => {
  const [image, setImage] = React.useState({min: '', full: ''});
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const isDayTimeWeather = React.useCallback(() => {
    return isDayTime(weather);
  }, [weather]);

  const calculateImage = React.useCallback(() => {
    if (!weather) return null;
    const id = weather.weather[0].id;
    const code = ('' + id)[0];
    const day = isDayTimeWeather();

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
        if (id === 800 || id === 801) {
          return day ? {full: sunnyImg, min: sunnyImgMin} : {
            full: clearSkyNightImg,
            min: clearSkyNightImgMin,
          };
        }
        if (id === 802 || id === 803) {
          return day ? {
            full: cloudyImg,
            min: cloudyImgMin,
          } : {full: cloudySkyNightImg, min: cloudySkyNightImgMin};
        }
        return day ? {full: coveredImg, min: coveredImgMin} : {full: coveredNightImg, min: coveredNightImgMin};
      default:
        return {full: cloudyImg, min: cloudyImgMin};
    }
  }, [isDayTimeWeather, weather]);


  React.useEffect(() => {
    setImage(calculateImage());
  }, [calculateImage, weather]);

  return (
    <div>
      {imageLoaded ?
        <img className="image full" src={image.full} alt='' onLoad={() => setImageLoaded(true)}/>
        : <img className="image thumb" src={image.min} alt=''/>}
    </div>
  );
};

BackgroundImage.propTypes = {
  weather: Weather,
}

export default BackgroundImage;
