import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export type WeatherType = {
  
  location: {
    name: string;
    region: string;
    country: string;
    localTime: string;
    lat: number;
    lon: number;
  }
  current: {
    condition: {
    text: string;
    icon: string;
    }
  };
};

export default function WeatherApp() {
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        loadInfo('London');
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather])

    async function loadInfo(city: string) {    
    try {
        const request = await fetch(`${import.meta.env.VITE_URL}?key=${import.meta.env.VITE_KEY}&q=${city}`);
        const json = await request.json();
        console.log(json)
        setWeather(json);
        console.log(city)

    } catch (error) {
      console.error(error);
    }
    }

  function handleChangeCity(city: string) {
    setWeather(null);
    loadInfo(city);
  }

    return (
    <div className="form-container">
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>{weather ? (
        <>
            <WeatherMainInfo weather={weather} />
        </>
      ) : (
        <p>No hay datos todavia</p>
      )}</div>
    </div>
  );
}
