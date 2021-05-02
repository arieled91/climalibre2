import React from 'react';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import message from '../localization/weather/WeatherLocal';
import WeatherDetail from './weatherDetail/WeatherDetail';
import styles from './Weather.module.css';
import {findByCity, findByCoords, getPosition} from '../handlers/weather.handler';
import {getIpLocation} from '../services/weather.service';

const Weather = () => {
  const [loading, setLoading] = React.useState(true);
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);
  const [permission, setPermission] = React.useState(Permission.EMPTY);

  React.useEffect(() => {
    handlePermission();
  }, []);

  React.useEffect( () => {
    populate().then();
  }, [permission]);

  const handlePermission = () => {
    try {
      navigator.permissions.query({name: 'geolocation'})
        .then((result) => {
          setPermission(result.state);
          result.onchange = () => {
            setPermission(result.state);
          };
        });
    } catch (_ignored) {
      setPermission(Permission.ERROR);
    }
  };

  const populateByLocation = async () => {
    const position = await getPosition();

    if (position) {
      const weather = await findByCoords(position.coords.latitude, position.coords.longitude);
      setWeather(weather.weather);
      setForecast(weather.forecast);
    }
  };


  const populateByCity = async () => {
    const location = await getIpLocation();
    if (location) {
      const weather = await findByCity(location.city, location.country_code);
      setWeather(weather.weather);
      setForecast(weather.forecast);
    }
  };

  const populate = async () => {
    if (permission === Permission.GRANTED) {
      await populateByLocation();
    }

    if (permission === Permission.PROMPT) {
      await populateByCity();
      await populateByLocation();
    }

    if (permission === Permission.DENIED || permission === Permission.ERROR) {
      await populateByCity();
    }

    if (permission !== Permission.EMPTY) {
      setLoading(false);
    }
  };


  const onFocus = () => {
    populate().then();
  };

  React.useEffect(() => {
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
    };
  });

  return (
    <div className={styles.container}>
      {!weather && !loading && permission === Permission.DENIED &&
        <Alert severity="error">{message.geolocationDisabled}</Alert>
      }
      {!weather && !loading && permission === Permission.PROMPT &&
        <Alert severity="info">
          <strong>{message.important}</strong>
          {` ${message.geolocationRequest}`}
        </Alert>
      }
      {weather && <WeatherDetail weather={weather} forecast={forecast} />}

      {!weather && <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '50%'}}>
        <CircularProgress/>
      </div>}

    </div>
  );
};

const Permission = {
  EMPTY: '',
  PROMPT: 'prompt',
  DENIED: 'denied',
  GRANTED: 'granted',
  ERROR: 'error'
};

export default Weather;
