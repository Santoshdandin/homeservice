import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';
import axios from "axios"

const SearchResultsPage = () => {
 
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  const [data, setData] = useState([]);
  // Filter the services data based on the search query
  const [filteredData, setFilteredData] = useState([]);

const getData = function (){
  axios.get('https://lazy-ruby-shawl.cyclic.app/homeservices')
  .then(response => {
    setData(response.data);
    
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


  

  useEffect(() => {
   
    getData()

    if (searchQuery) {
      const filteredResults = data.filter((service) =>
      service.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredResults);
    } else {
      setFilteredData(data);
    }
  }, [location,data,searchQuery]);

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

              <Link href={`/services/${title}`} color="inherit" underline="none"> <Card sx={{cursor:'pointer' }}>
      
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
      
      
    </Card> </Link> 

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