import React from 'react'
import local from "../localization/weather/CurrentWeatherLocal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import cloudyImg from "./../assets/cloudy-sky.jpg";
import drizzleImg from "./../assets/drizzle.jpg";
import fogImg from "./../assets/fog.jpg";
import rainyImg from "./../assets/rainy-day.jpg";
import snowImg from "./../assets/snow.jpg";
import stormImg from "./../assets/storm.jpg";
import sunnyImg from ".././assets/sunny.jpg";
import defaultImg from "./../assets/default.jpg";
import coveredImg from "./../assets/covered.jpg";

const WeatherComponent = (props) => {
    const weather = props.weather;

    const [image, setImage] = React.useState(null);

    React.useEffect(() => {
        setImage(calculateImage());
    },[props.weather])

    const calculateImage = () => {
        if(!weather) return null;
        const id = weather.weather[0].id;
        const code = (''+id)[0];

        switch (code) {
            case '2': return stormImg;
            case '3': return drizzleImg;
            case '5': return rainyImg;
            case '6': return snowImg;
            case '7': return fogImg;
            case '8':
                if(id === 800 || id === 801) return sunnyImg;
                if(id === 802 || id === 803) return cloudyImg;
                return coveredImg;
            default: return defaultImg;
        }

    }

    const degreesToCardinal = (deg) => {
        const cardinals = [
            local.north,
            local.northEast,
            local.east,
            local.southEast,
            local.south,
            local.southWest,
            local.west,
            local.northwest,
            local.north
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
    }

    return (
        <div style={styles.main}>
            {weather ? <Card style={styles.main}>
                <CardActionArea style={{height: '100%'}}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={1} sm={3} md={4} xl={5}/>
                            <Grid item xs={10} sm={6} md={4} xl={2}>
                                <Grid container direction="column" justify="center" alignItems="center" style={styles.component}>
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
                                        <Typography variant="h6" gutterBottom style={styles.capitalize}>
                                            {weather.weather[0].description}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" gutterBottom>
                                            {local.humidity}: <strong>{parseFloat(weather.main.humidity).toFixed(0)+"%"}</strong>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" gutterBottom>
                                            {local.wind}: <strong>{parseFloat(weather.wind.speed).toFixed(0)+" km/h "+degreesToCardinal(weather.wind.deg)}</strong>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color="textSecondary" gutterBottom>{weather.name}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sm={3} md={4} xl={5}/>
                        </Grid>

                    </CardContent>
                </CardActionArea>
            </Card> : <LinearProgress />}
        </div>
    )
}



export default WeatherComponent;
