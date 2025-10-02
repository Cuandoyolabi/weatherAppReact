import type { WeatherType } from "./weatherApp";

interface WeatherMainInfoProps{
    weather: WeatherType;
}

export default function WeatherMainInfo({weather}: WeatherMainInfoProps){
    return (
        <div>
            <p>{weather.location.name}</p>
        </div>
    )
}