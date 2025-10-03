import type { WeatherType } from "./weatherApp";

interface WeatherMainInfoProps{
    weather: WeatherType;
}

export default function WeatherMainInfo({weather}: WeatherMainInfoProps){
    return (
        <>
            <div className="weather-main-info">
                <div className="weather-location">
                    <h2>{weather.location.name}</h2>
                    <p>{weather.location.region}</p>
                </div> 
                <div className="weather-country">
                    <p>{weather.location.country}</p>
                </div>
            </div>
            <div className="weather-condition">
                <h2>{weather.current.condition.text}</h2>
                <img src={weather.current.condition.icon} className="weather-img" />
            </div>
            <div className="weather-coords">
                <p>Latitud: {weather.location.lat}</p>
                <p>Longitud: {weather.location.lat}</p>
            </div>
        </>
    )
}