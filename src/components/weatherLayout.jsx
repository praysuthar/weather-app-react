import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const WeatherLayout = ({ weatherData }) => {
  return (
    <Box
      marginLeft="35vw"
      textAlign="center"
      maxHeight="calc(100vh-4.5rem)"
      justifyContent="center"
      alignContent="center"
      display="grid"
      position="absolute"
    >
      {weatherData && (
        <div>
          <Text>Feels like:{weatherData?.main?.feels_like}°C</Text>
          <Text>Min Temp:{weatherData?.main?.temp_min}°C</Text>
          <Text>Max Temp:{weatherData?.main?.temp_max}°C</Text>
          <Text>Humidity: {weatherData?.main?.humidity}%</Text>
          <Text>Visibility: {weatherData?.visibility / 1000} km</Text>
          <Text>Wind Speed: {weatherData?.wind?.speed} meter/sec</Text>
          {/* Add more data as needed */}
        </div>
      )}
    </Box>
  );
};

export default WeatherLayout;
