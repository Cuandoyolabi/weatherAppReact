import type { WeatherType } from "./weatherApp";

interface WeatherMainInfoProps{
    weather: WeatherType;
}

export default function WeatherMainInfo({weather}: WeatherMainInfoProps){
    return (
        <div>
            <p>{weather.location.name}</p>
            <p>{weather.location.region}</p>
            <p>{weather.location.country}</p>
            <p>{weather.location.location}</p>
            <p>{weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} />
        </div>
    )
}