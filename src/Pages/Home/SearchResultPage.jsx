import React, { useState, useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import servicesData from '../../Data/ServecesData.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const SearchResultsPage = () => {
 
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  // Filter the services data based on the search query
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
   
  
    if (searchQuery) {
      const filteredResults = servicesData.filter((service) =>
      service.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredResults);
    } else {
      setFilteredData(servicesData);
    }
  }, [location]);

  // const filteredServices = servicesData.filter((service) =>
  //   service.title?.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <Box backgroundColor={'#f1f5fd'} >
      

    <Box maxWidth={{xs:'95%',md:'85%'}}  margin={'auto'} py={'6rem'}>
    {filteredData.length > 0 ? (
        <Box display={'grid'} gridTemplateColumns={{xs:'1fr 1fr',md:'1fr 1fr 1fr 1fr'}} gap={'20px'}>
        {filteredData.map(({image,title,range})=>{
            return (

                <Card sx={{cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'left',padding:'15px', pb:'15px'}}>
          <Typography color={'#11151e'} fontSize={'16px'} mb={'5px'}  >
            {title}
          </Typography>
          <Typography color={'#3f78e0'} fontSize={'18px'} fontWeight={500}>
        {range}
        </Typography>
          
        </CardContent>
      
      
    </Card>

            )
        })}
    
    
    </Box>
        
      ) : (
        <Typography textAlign={'center'} fontSize={'35px'}>No results found for "{searchQuery}"</Typography>
      )}

    </Box>


     
    </Box>
  );
};

export default SearchResultsPage;