import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import servicesData from '../../Data/ServecesData.json'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/services/search?query=${encodeURIComponent(searchQuery)}`);
   
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
    navigate(`/services/${e.target.outerText}`);
  };

  // const handleSuggestionClick = (suggestion) => {
  //   // Redirect to search results page with the suggestion as a query parameter
    
  // };

  return (
    <div
      className="search-page"
      style={{
        height: '80vh',
        display: 'flex',
        backgroundColor:'#f1f5fd',
        alignItems: 'center',
        display:'flex',
        flexDirection:'column',
        marginBottom:'7rem',
        justifyContent:'center'
        
      }}
    >
      <Box textAlign={'center'} maxWidth={{md:'500px',xs:'350px'}} mb={'30px'}  alignContent={'center'} color={'#343f52'}  >
        <Typography fontWeight={700} fontSize={{md:'52px',xs:'35px'}} lineHeight={1.2}  >
         {` Connect with experts to make life `} 
          <Typography position={'relative'} component={'span'} fontWeight={700} fontSize={{md:'52px',xs:'35px'}} lineHeight={1.2} >
           easier
           <Box position={'absolute'} top={{md:'-14px',xs:'-35px'}} right={0}>
           <img src='/Assets/Images/underline.svg' width={'150px'}  />

           </Box>
          </Typography>
          
            
          
        </Typography>
         

      </Box>

      <Box display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Autocomplete
        freeSolo
        options={suggestions}
        inputValue={searchQuery}
        onInputChange={(event, value) => setSearchQuery(value)}
        // onChange={(event, value) => handleSuggestionClick(value)}
        size="large"
        sx={{width:{xs:'70%',md:'30%'}}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Ex:Home services,cleaning..'
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
      </Box>
      
      
    </div>
  );
};

export default SearchPage;