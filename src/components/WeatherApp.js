import React, { useState } from 'react';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <button onClick={fetchWeather}>Get Weather</button>
            {weather && (
                <div className="weather-info">
                    <h2>{weather.location.name}</h2>
                    <p>{weather.current.temp_c}°C</p>
                    <p>{weather.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
