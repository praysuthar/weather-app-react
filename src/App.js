import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react'; //Text Link
import WeatherLayout from './components/weatherLayout';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './app.css';

function App() {
  // eslint-disable-next-line
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const handleSearch = searchCity => {
    setCity(searchCity);
    fetchWeatherData(searchCity);
  };

  const fetchWeatherData = searchCity => {
    fetch(`${API_URL}?q=${searchCity}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
      });
  };
  return (
    <ChakraProvider theme={theme}>
      <Searchbar onSearch={handleSearch} />
      <WeatherLayout weatherData={weatherData} />
      <Sidebar weatherData={weatherData} />
    </ChakraProvider>
  );
}

export default App;
