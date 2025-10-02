import { useState } from "react";

interface WeatherFromProps{
    onChangeCity: (city: string) => void;
}

export default function WeatherForm({onChangeCity}: WeatherFromProps){

    const [city, setCity] = useState("");

    function onChange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;

        if(value !== ""){
            setCity (value);
        }        
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        onChangeCity(city);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
    </form>

}