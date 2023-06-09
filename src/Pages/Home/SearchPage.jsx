import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import servicesData from './ServecesData.json';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
   
  };

  const handleInputChange = (e) => {
   const value = e.target.value;
  
   setSearchQuery(value);

   const matchingServices = servicesData.filter(
     (service) =>
       service.title.toLowerCase().includes(value.toLowerCase())
   );
 
   const matchingTitles = matchingServices.map((service) => service.title);
   setSuggestions(matchingTitles);
 
   if (value === '' || matchingTitles.includes(value)) {
     setSearchQuery(value);
   }
  };

  const handleAutocompleteChange = (e) => {
    
    setSearchQuery(e.target.outerText);
  };

  return (
    <div
      className="search-page"
      style={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box >

      </Box>
      <Autocomplete
        freeSolo
        options={suggestions}
        size="large"
        sx={{width:{xs:'80%',md:'30%'}}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Search for home services...'
            value={searchQuery}
            sx={{background:'#fff'}}
            onChange={handleInputChange}
          />
        )}
        onChange={handleAutocompleteChange}
      />
      <Button onClick={handleSearch} variant="contained" sx={{bgcolor:'#C1FF72',color:'#2D3142',height:'60px'}}>
        <SearchIcon sx={{ fontSize: 30 }}/>
      </Button>
    </div>
  );
};

export default SearchPage;