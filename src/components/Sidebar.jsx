import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

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
      width="100%"
      maxWidth="30vw"
      height="100vh"
      alignContent="center"
      textAlign="center"
      justifyContent="center"
      left="0"
    >
      {/* <Text fontSize="3xl" as="b" color="blue">
        Sidebar
      </Text> */}
      {weatherData && (
        <div>
          <Heading as="h2" size="md">
            {weatherData?.name}
          </Heading>
          <Text as="h3" size="md">
            {formatDate(weatherData.dt)}
          </Text>
          <Text>{Math.round(weatherData?.main?.temp)}°C</Text>
          <Text> {weatherData?.weather[0]?.description}</Text>
        </div>
      )}
    </Box>
  );
};
export default Sidebar;
