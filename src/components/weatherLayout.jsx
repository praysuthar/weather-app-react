import { Box, Text } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const WeatherLayout = ({ weatherData }) => {
  return (
    <Box
      marginLeft="45vw"
      textAlign="center"
      maxHeight="calc(100vh-4.5rem)"
      justifyContent="center"
      alignContent="center"
      maxWidth="65vw"
      marginRight="1rem"
      marginY="6rem"
      position="absolute"
      fontSize="x-large"
    >
      {weatherData && (
        <SimpleGrid
          minChildWidth="120px"
          spacing="40px"
          display="grid"
          columnGap="3rem"
          gridTemplateColumns="auto auto auto"
          padding="3rem 3rem"
          border="1px solid white"
          borderRadius="25px"
        >
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Feels like <br />
            </Text>
            {Math.round(weatherData?.main?.feels_like)}°
          </Box>
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Min Temp <br />
            </Text>
            {Math.round(weatherData?.main?.temp_min)}°C
          </Box>
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Max Temp <br />
            </Text>
            {Math.round(weatherData?.main?.temp_max)}°C
          </Box>
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Humidity <br />
            </Text>
            {weatherData?.main?.humidity}%
          </Box>
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Visibility <br />
            </Text>
            {weatherData?.visibility / 1000} km
          </Box>
          <Box bg="black" height="120px" padding="20px 20px">
            <Text background="InactiveBorder" marginBottom="1rem">
              Wind Speed <br />
            </Text>
            {weatherData?.wind?.speed} meter/sec
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default WeatherLayout;
