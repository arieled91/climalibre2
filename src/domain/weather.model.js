import PropTypes from 'prop-types';

export const Weather = PropTypes.shape({
  name: PropTypes.string,
  weather: PropTypes.array,
  main: PropTypes.object,
  wind: PropTypes.object
});

export const Forecast = PropTypes.shape({
  list: PropTypes.array
});
