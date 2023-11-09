import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react'; //Text Link

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Weather App Using React + Chakra UI
      </Box>
    </ChakraProvider>
  );
}

export default App;
