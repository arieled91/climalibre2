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

import styles from './BackgroundImage.module.css';
import {classes, isDayTime} from '../../utils/Util';
import {Weather} from '../../domain/weather.model';

const BackgroundImage = ({weather}) => {
  const [image, setImage] = React.useState({min: '', full: ''});
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const calculateImage = () => {
      if (!weather) return null;
      const weatherId = weather.weather[0].id;
      const weatherCode = ('' + weatherId)[0];
      const isDay = isDayTime(weather);

      switch (weatherCode) {
        case '2':
          return {full: stormImg, min: stormImgMin};
        case '3':
          return isDay ? {full: drizzleImg, min: drizzleImgMin} : {full: drizzleNightImg, min: drizzleNightImgMin};
        case '5':
          return isDay ? {full: rainyImg, min: rainyImgMin} : {full: rainyNightImg, min: rainyNightImgMin};
        case '6':
          return isDay ? {full: snowImg, min: snowImgMin} : {full: snowNightImg, min: snowNightImgMin};
        case '7':
          return isDay ? {full: fogImg, min: fogImgMin} : {full: fogNightImg, min: fogNightImgMin};
        case '8':
          if (weatherId === 800 || weatherId === 801) {
            return isDay ? {full: sunnyImg, min: sunnyImgMin} : {
              full: clearSkyNightImg,
              min: clearSkyNightImgMin
            };
          }
          if (weatherId === 802 || weatherId === 803) {
            return isDay ? {
              full: cloudyImg,
              min: cloudyImgMin
            } : {full: cloudySkyNightImg, min: cloudySkyNightImgMin};
          }
          return isDay ? {full: coveredImg, min: coveredImgMin} : {full: coveredNightImg, min: coveredNightImgMin};
        default:
          return {full: cloudyImg, min: cloudyImgMin};
      }
    };

    setImage(calculateImage());
  }, [weather]);

  return (
    <div className={styles.container}>
      <img className={classes(styles.image, styles.thumb, imageLoaded ? styles.hidden : '')} src={image.min} alt=''/>
      <img className={classes(styles.image, !imageLoaded ? styles.hidden : '')}
        src={image.full} alt=''
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

BackgroundImage.propTypes = {
  weather: Weather
};

export default BackgroundImage;
