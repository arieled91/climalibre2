import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes, {number} from 'prop-types';

const WeatherIcon = ({isDayTime = true, weatherCode, ...props}) => {
  const [icon, setIcon] = React.useState(null);

  React.useEffect(() => {
    if (weatherCode !== null && weatherCode !== undefined) {
      const id = weatherCode.toString()[0];

      switch (id) {
        case '2':
        case '5':
        case '3':
          setIcon('RAIN');
          break;
        case '6':
          if ([612, 613, 615].includes(weatherCode)) setIcon('SLEET');
          else setIcon('SNOW');
          break;
        case '7':
          if ([771, 781].includes(weatherCode)) setIcon('WIND');
          else setIcon('FOG');
          break;
        case '8':
          if ([800, 801].includes(weatherCode)) {
            if (isDayTime) setIcon('CLEAR_DAY');
            else setIcon('CLEAR_NIGHT');
          }
          if ([802, 803].includes(weatherCode)) {
            if (isDayTime) setIcon('PARTLY_CLOUDY_DAY');
            else setIcon('PARTLY_CLOUDY_NIGHT');
          }
          if (weatherCode === 804) setIcon('CLOUDY');
          break;

        default:
          setIcon('PARTLY_CLOUDY_DAY');
      }
    }
  }, [weatherCode, isDayTime]);

  return (
    <div>
      {icon && <ReactAnimatedWeather id="canvas"
        icon={icon}
        {...props}
      />}
    </div>
  );
};

WeatherIcon.propTypes = {
  isDayTime: PropTypes.bool,
  weatherCode: number
};

export default WeatherIcon;
