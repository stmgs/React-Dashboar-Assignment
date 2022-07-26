import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Weather = () => {

    //use state hooks to store weather data
    const [weather, setWeather] = useState("Sunny")
    const [temp, setTemp] = useState(22.2)
    const [feels, setFeels] = useState(22.2)
    const [pressure, setPressure] = useState(22.2)
    const [humidity, setHumidity] = useState(22.2)
        const [location, setLocation] = useState('Barrie')
                const [data, setData] = useState(null)

        let url ='https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=4fcf4c059b8449a613174ea2e84f3e88'

        useEffect(() =>{
             axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
        setWeather(data.weather[0].main);
            setTemp(data.main.temp);
            setFeels(data.main.feels_like);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity)
      })

      .catch((error) => console.log(error));
       
    },[]);


    return ( 
        <>

        <div className="container-weather text-center">
        <div className="content">

        
            <h1 className="heading" style={{color:"yellow"}}><strong>Barrie, Ontario, Canada</strong></h1>
            <h1 className="subheading">Weather : {weather}</h1>
            <h2 className="subheading-2">Temprature : {temp}°C</h2>
            <h3 className="subheading-2">Feels Like : {feels}°C</h3>
            <h4 className="subheading-2">Pressure : {pressure} hPa</h4>
            <h4 className="subheading-2">Humidity : {humidity}%</h4>
        </div>
        </div>
        </>

     );
}
 
export default Weather;