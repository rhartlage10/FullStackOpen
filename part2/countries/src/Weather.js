import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {

    const [ weather, setWeather ] = useState([])

    useEffect(() => {axios.get('http://api.weatherstack.com/current?access_key=' + process.env.REACT_APP_API_KEY + '&query=' + capital)
        .then(response => {
            setWeather(response.data.current)
        })
    })  

    return(
        <div>
            <h2>Weather in {capital}</h2>
            <p><b>temperature: </b> {weather.temperature} Degrees Celsius</p>
            <img src={weather.weather_icons} alt="Weather icon"/>
            <p><b>wind: </b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
    )
}

export default Weather