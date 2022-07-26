import React from 'react'
import { useEffect, useState } from "react";


const WeatherBrief = () => {
    const [weather, setWeather] = useState("Sunny")
    const [temp, setTemp] = useState(22.2)
    const [location, setLocation] = useState('Barrie')


    let url ='https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=4fcf4c059b8449a613174ea2e84f3e88'
    
    useEffect(() =>{
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data =>{
            console.log(data);
            setWeather(data.weather[0   ].main);
            setTemp(data.main.temp);
        })
       
    },[]);


    return ( 
        <>
        <div className="container-weather">
        <div className="content">

        <h1 className="title" style={{color:"yellow"}}><strong>Barrie,ON,Canada</strong></h1>
        
            <h1 className="heading"><strong></strong></h1>
            <h1 className="subheading">Weather : {weather}</h1>
            <h2 className="subheading-2">Temprature : {temp}°C</h2>
            
        </div>
        </div>
        </>

     );
}
 
export default WeatherBrief;