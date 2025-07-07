import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="95a1db84360e0d47250d7fcb51472837";

let getWeatherInfo = async () => {
   let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonResponse = await response.json();
   if (!response.ok) {
    // Handle error, e.g. city not found
    alert(jsonResponse.message || "Error fetching weather data");
    return;
  }
  // Now jsonResponse is valid, pass it to updateInfo or use as needed
  updateInfo({
    city: jsonResponse.name,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    feels_like: jsonResponse.main.feels_like,
    humidity: jsonResponse.main.humidity,
    weather: jsonResponse.weather[0].description,
  });
};

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
    event.preventDefault();
    console.log(city);
    setCity('');
    await getWeatherInfo();
    }
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="city name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}
