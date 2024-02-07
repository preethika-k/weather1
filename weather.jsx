// WeatherPage.js
import React, { useState } from 'react';
import './weather.css'; // Import the CSS file

const WeatherPage = () => {
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const showWeatherPopup = () => {
    if (location && state) {
      const weatherInfo = getWeatherInfo(location, state);
      if (weatherInfo) {
        alert(`Weather in ${location}, ${state}:\nTemperature: ${weatherInfo.temperature}°C\nDescription: ${weatherInfo.description}`);
      } else {
        alert('Weather information not available for the entered location and state.');
      }
    } else {
      alert('Please enter both location and state.');
    }
  };

  const getWeatherInfo = (location, state) => {
    // Simulating different weather information based on location and state
    const weatherData = {
      'Chennai, Tamilnadu': { temperature: 38, description: 'sunny' },
      'Coimbatore, Tamilnadu': { temperature: 31, description: 'partly cloudy' },
      'Madurai, Tamilnadu': { temperature: 38, description: 'mostly sunny' },
      'Salem, Tamilnadu': { temperature: 29, description: 'partly sunny' },


      // Add more locations as needed
    };

    const key = `${location}, ${state}`;
    return weatherData[key];
  };

  return (
    <div className="container">
      <h1>Weather Information</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
      />
      <input
        type="text"
        placeholder="Enter state"
        value={state}
        onChange={handleStateChange}
      />
      <button onClick={showWeatherPopup}>Get Weather</button>
    </div>
  );
};

export default WeatherPage;
