import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    // Set up state for weather info
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feels_like: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    // This function will be called by SearchBox to update the weather info
    let updateInfo = (info) => {
        setWeatherInfo(info);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}