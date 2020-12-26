import React from 'react';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import message from '../localization/weather/WeatherLocal';
import Api from '../api/Api';
import WeatherComponent from './weatherComponent/WeatherComponent';
import styles from './Weather.module.css'

const Weather = () => {
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [permission, setPermission] = React.useState('');

  const Permission = {
    PROMPT: 'prompt',
    DENIED: 'denied',
    GRANTED: 'granted',
  };

  const handlePermission = () => {
    navigator.permissions.query({name: 'geolocation'}).then((result) => {
      setPermission(result.state);
      result.onchange = () => setPermission(result.state);
    });
  };

  const getWeatherByCoords = (lat, lon) => {
    Api.getWeatherByCoords(lat, lon, message.getLanguage())
        .then((w) => setWeather(w))
        .catch((e) => {
          setError(e.message);
          console.log(e);
        });

    Api.getForecastByCoords(lat, lon, message.getLanguage())
        .then((forecast) => {
          setForecast(forecast);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        });
  };

  const populateByLocation = React.useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => getWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude,
          ),
      );
    }
  }, []);

  React.useEffect(() => {
    handlePermission();
  }, []);

  const populateByCity = React.useCallback(() => {
    Api.getIpLocation().then((location) => {
      getWeatherByCity(location.city, location.country_code);
    }).catch((e) => {
      if (permission !== Permission.PROMPT) {
        setError(message.geolocationDisabled);
        console.log(e);
      }
    });
  }, [permission, Permission.PROMPT]);

  const populate = React.useCallback(() => {
    setError(null);

    populateByLocation();

    if (permission === Permission.DENIED ||
      permission === Permission.PROMPT || !navigator.geolocation) {
      populateByCity();
    }
  }, [populateByLocation, populateByCity, permission, Permission.DENIED, Permission.PROMPT]);

  React.useEffect(() => {
    if (permission !== '') populate();
  }, [populate, permission]);


  const getWeatherByCity = (city, countryCode) => {
    Api.getWeatherByCity(city, countryCode, message.getLanguage())
        .then((weather) => setWeather(weather))
        .catch((error) => {
          setError(error.message);
          console.log(error);
        });
  };

  const onFocus = () => {
    populate();
  };

  React.useEffect(() => {
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
    };
  });

  return (
    <div className={styles.container}>
      {error && <Alert severity="error">{error}</Alert>}
      {!weather && permission === Permission.PROMPT && (
        <Alert severity="info">
          <strong>{message.important}</strong>
          {` ${message.geolocationRequest}`}
        </Alert>
      )}
      {weather && <WeatherComponent weather={weather} forecast={forecast} />}

      {!weather && permission !== Permission.DENIED &&
      <div style={{display: 'flex', justifyContent: 'center', position: 'relative', top: '50%'}}>
        <CircularProgress/>
      </div>}

    </div>
  );
};

export default Weather;
