import { useState } from "react";
import WeatherForm from "./weatherForm";


export default function weatherApp(){

    const [weather, setWeather] = useState(null);

   async  function loadInfo(city: string){

    try {
        const request = await fetch());
    } catch(error){
        console.error (error)
    }
    }

    function handleChangeCity(city: string){
        setWeather(null);
        loadInfo();
    }

    return <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <div>Info</div>
    </div>
}