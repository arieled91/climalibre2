import message from "../localization/weather/WeatherLocal";

export const fix = (temp, digits = 0) => {
    return parseFloat(temp).toFixed(digits);
}

export const getLocalTime = (time) => {
    const stringTime = new Date(time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    return stringTime.charAt(0) === '0' ? stringTime.substr(1) : stringTime;
}

export const degreesToCardinal = (deg) => {
    const cardinals = [
        message.north,
        message.northEast,
        message.east,
        message.southEast,
        message.south,
        message.southWest,
        message.west,
        message.northwest,
        message.north
    ];

    return cardinals[parseFloat((deg % 360) / 45).toFixed(0)];
}

export const isDayTime = (weather) => {
    const sunrise = weather.sys.sunrise * 1000;
    const sunset = weather.sys.sunset * 1000;
    const now = new Date().getTime();
    return now > sunrise && now < sunset;
}
