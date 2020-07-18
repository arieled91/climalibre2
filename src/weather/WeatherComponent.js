import React from 'react'
import message from "../localization/weather/CurrentWeatherLocal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";

import cloudyImgMin from "./../assets/cloudy-sky-min.jpg";
import drizzleImgMin from "./../assets/drizzle-min.jpg";
import drizzleNightImgMin from "./../assets/drizzle-night-min.jpg";
import fogImgMin from "./../assets/fog-min.jpg";
import rainyImgMin from "./../assets/rainy-day-min.jpg";
import snowImgMin from "./../assets/snow-min.jpg";
import stormImgMin from "./../assets/storm-min.jpg";
import sunnyImgMin from "./../assets/sunny-min.jpg";
import coveredImgMin from "./../assets/covered-min.jpg";
import clearSkyNightImgMin from "./../assets/clear-sky-night-min.jpg";
import cloudySkyNightImgMin from "./../assets/cloudy-sky-night-min.jpg";
import fogNightImgMin from "./../assets/fog-night-min.jpg";
import snowNightImgMin from "./../assets/snow-night-min.jpg";
import coveredNightImgMin from "./../assets/covered-night-min.jpg";
import rainyNightImgMin from "./../assets/rainy-night-min.jpg";
import cloudyImg from "./../assets/cloudy-sky.jpg";
import drizzleImg from "./../assets/drizzle.jpg";
import drizzleNightImg from "./../assets/drizzle-night.jpg";
import fogImg from "./../assets/fog.jpg";
import rainyImg from "./../assets/rainy-day.jpg";
import snowImg from "./../assets/snow.jpg";
import stormImg from "./../assets/storm.jpg";
import sunnyImg from ".././assets/sunny.jpg";
import coveredImg from "./../assets/covered.jpg";
import clearSkyNightImg from "./../assets/clear-sky-night.jpg";
import cloudySkyNightImg from "./../assets/cloudy-sky-night.jpg";
import fogNightImg from "./../assets/fog-night.jpg";
import snowNightImg from "./../assets/snow-night.jpg";
import coveredNightImg from "./../assets/covered-night.jpg";
import rainyNightImg from "./../assets/rainy-night.jpg";

import './Image.css';

const WeatherComponent = (props) => {
    const weather = props.weather;

    const [image, setImage] = React.useState({min: '', full: ''});
    const [imageLoaded, setImageLoaded] = React.useState(false);

    React.useEffect(() => {
        setImage(calculateImage());
    },[JSON.stringify(props.weather)])

    const isDayTime = () => {
        const sunrise = weather.sys.sunrise*1000;
        const sunset = weather.sys.sunset*1000;
        const now = new Date().getTime();
        return now > sunrise && now < sunset;
    }

    const calculateImage = () => {
        if(!weather) return null;
        const id = weather.weather[0].id;
        const code = (''+id)[0];
        const day = isDayTime()

        switch (code) {
            case '2': return {full: stormImg, min: stormImgMin};
            case '3': return day ? {full: drizzleImg, min: drizzleImgMin} : {full: drizzleNightImg, min: drizzleNightImgMin};
            case '5': return day ? {full: rainyImg, min: rainyImgMin} : {full: rainyNightImg, min: rainyNightImgMin};
            case '6': return day ? {full: snowImg, min: snowImgMin} : {full: snowNightImg, min: snowNightImgMin};
            case '7': return day ? {full: fogImg, min: fogImgMin} : {full: fogNightImg, min: fogNightImgMin};
            case '8':
                if(id === 800 || id === 801) return day ? {full: sunnyImg, min: sunnyImgMin} : {full: clearSkyNightImg, min: clearSkyNightImgMin};
                if(id === 802 || id === 803) return day ? {full: cloudyImg, min: cloudyImgMin} : {full: cloudySkyNightImg, min: cloudySkyNightImgMin};
                return day ? {full: coveredImg, min:coveredImgMin} : {full: coveredNightImg, min: coveredNightImgMin};
            default: return {full: cloudyImg, min:cloudyImgMin};
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
            overflow: 'hidden'
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
        },
        fullHeight: {
            height: '100%'
        }
    }

    return (
        <div style={styles.main}>
            <Card style={styles.main}>
                <div>
                    {!imageLoaded && <img className="image thumb" src={image.min} alt=''/>}
                    <img className="image full" src={image.full} alt='' onLoad={() => setImageLoaded(true)}/>
                </div>
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
