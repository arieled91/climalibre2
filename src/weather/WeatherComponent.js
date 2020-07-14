import React from 'react'
import message from "../localization/weather/CurrentWeatherLocal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import moment from 'moment';

import cloudyImg from "./../assets/cloudy-sky.jpg";
import drizzleImg from "./../assets/drizzle.jpg";
import drizzleNightImg from "./../assets/drizzle-night.jpg";
import fogImg from "./../assets/fog.jpg";
import rainyImg from "./../assets/rainy-day.jpg";
import snowImg from "./../assets/snow.jpg";
import stormImg from "./../assets/storm.jpg";
import sunnyImg from ".././assets/sunny.jpg";
import defaultImg from "./../assets/default.jpg";
import coveredImg from "./../assets/covered.jpg";
import clearSkyNightImg from "./../assets/clear-sky-night.jpg";
import cloudySkyNightImg from "./../assets/cloudy-sky-night.jpg";
import fogNightImg from "./../assets/fog-night.jpg";
import snowNightImg from "./../assets/snow-night.jpg";
import coveredNightImg from "./../assets/covered-night.jpg";
import rainyNightImg from "./../assets/rainy-night.jpg";

const WeatherComponent = (props) => {
    const weather = props.weather;

    const [image, setImage] = React.useState('');

    React.useEffect(() => {
        setImage(calculateImage());
    },[props.weather])

    const minutesOfDay = (m) => {
        return m.minutes() + m.hours() * 60;
    }

    const isDayTime = () => {
        const sunrise = minutesOfDay(moment(weather.sys.sunrise));
        const sunset = minutesOfDay(moment(weather.sys.sunset));
        const now = minutesOfDay(moment());

        return now > sunrise && now < sunset;
    }

    const calculateImage = () => {
        if(!weather) return null;
        console.log(weather);
        const id = weather.weather[0].id;
        const code = (''+id)[0];
        const day = isDayTime()

        switch (code) {
            case '2': return stormImg;
            case '3': return day ? drizzleImg : drizzleNightImg;
            case '5': return day ? rainyImg : rainyNightImg;
            case '6': return day ? snowImg : snowNightImg;
            case '7': return day ? fogImg : fogNightImg;
            case '8':
                if(id === 800 || id === 801) return day ? sunnyImg : clearSkyNightImg;
                if(id === 802 || id === 803) return day ? cloudyImg : cloudySkyNightImg;
                return day ? coveredImg : coveredNightImg;
            default: return defaultImg;
        }

    }

    const degreesToCardinal = (deg) => {
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

    const styles = {
        heightSmall: {
            height: '15px'
        },
        heightMedium: {
            height: '28px'
        },
        temp: {
            fontSize: '42pt',
            fontWeight: 'bold',
            verticalAlign: 'middle'
        },
        middle: {
            verticalAlign: 'middle'
        },
        capitalize: {
            textTransform: 'capitalize',
            fontWeight: 'bold'
        },
        component: {
            background: 'rgba(245,245,245, .75)',
            padding: '60px 0 60px 0',
            borderRadius : '5px'
        },
        main: {
            width: '100%',
            height: '100%',
            align: 'center',
            textAlign: 'center',
            backgroundImage: image ? `url(${image})` : '',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
        fullHeight: {
            height: '100%'
        }
    }

    return (
        <div style={styles.main}>
            <Card style={styles.main}>
                <CardContent style={styles.fullHeight}>
                    <Grid container direction="row" justify="center" alignItems="center"
                          style={styles.fullHeight}>
                        <Grid item xs={1} sm={3} md={4} xl={5}/>
                        <Grid item xs={10} sm={6} md={4} xl={2}>
                            <CardActionArea onClick={props.clicked}>
                            <Grid container direction="column" justify="center" alignItems="center" style={styles.component}>

                                <Grid item>
                                    <Typography variant="h5" gutterBottom style={{...styles.capitalize, marginBottom: '-5px'}}>
                                        {weather.weather[0].description}
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Typography variant='h4' style={styles.temp}>
                                                <img alt="" src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
                                                {(parseFloat(weather.main.temp).toFixed(0))+"°C"}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column" style={{marginTop: '10px'}}>
                                                <Grid item style={{fontSize: '16pt'}}>
                                                    {(parseFloat(weather.main.temp_max).toFixed(0))+'°'}
                                                </Grid>
                                                <Grid item style={{fontSize: '16pt'}}>
                                                    {(parseFloat(weather.main.temp_min).toFixed(0))+'°'}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant="body1" gutterBottom>
                                        {message.feelsLike}: <strong>{parseFloat(weather.main.feels_like).toFixed(1)+"º"}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" gutterBottom>
                                        {message.humidity}: <strong>{parseFloat(weather.main.humidity).toFixed(0)+"%"}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" gutterBottom>
                                        {message.wind}: <strong>{parseFloat(weather.wind.speed).toFixed(0)+" km/h "+degreesToCardinal(weather.wind.deg)}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="textSecondary" gutterBottom>{weather.name}</Typography>
                                </Grid>
                            </Grid>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={1} sm={3} md={4} xl={5}/>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}



export default WeatherComponent;