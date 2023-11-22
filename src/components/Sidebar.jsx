import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const formatDate = timestamp => {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Sidebar = ({ weatherData }) => {
  return (
    <Box
      maxWidth="35vw"
      maxHeight="calc(100vh-4.5vh)"
      alignContent="center"
      textAlign="center"
      justifyContent="center"
      left="0"
      marginTop="5rem"
    >
      {weatherData && (
        <div>
          <div>
            <Text fontSize="6xl">{weatherData?.name}</Text>
            <Text as="h3" size="md" marginBottom="8rem">
              {formatDate(weatherData.dt)}
            </Text>
          </div>
          <div>
            <Text fontSize="9xl">{Math.round(weatherData?.main?.temp)}°C</Text>
            <Text fontSize="3xl"> {weatherData?.weather[0]?.description}</Text>
          </div>
        </div>
      )}
    </Box>
  );
};
export default Sidebar;
