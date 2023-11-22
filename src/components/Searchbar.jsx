import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

const Searchbar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInput = event => {
    setCity(event.target.value);
  };
  const handleSearch = () => {
    onSearch(city);
  };
  return (
    <Box
      justifyContent="center"
      width="100vw"
      marginLeft="35vw"
      marginTop="2rem"
      maxHeight="2.5rem"
    >
      <Input
        colorScheme="blackAlpha"
        focusBorderColor="#6d7774"
        variant="outline"
        size="sm"
        placeholder="Search for city"
        // isRequired="true"
        width="100vw"
        maxWidth="25vw"
        onChange={handleInput}
        value={city}
      />
      <Button
        rightIcon={<GoSearch />}
        colorScheme="teal"
        variant="ghost"
        borderRadius="md"
        type="submit"
        onClick={handleSearch}
      >
        Get Weather!
      </Button>
    </Box>
  );
};
export default Searchbar;
