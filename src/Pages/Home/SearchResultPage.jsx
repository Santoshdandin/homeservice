import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import servicesData from './ServecesData.json';

const SearchResultsPage = () => {
  const location = useLocation();
  // const searchQuery = new URLSearchParams(location.search).get('query');
console.log(location);
  // Filter the services data based on the search query
  // const filteredServices = servicesData.filter((service) =>
  //   service.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div>
      {/* <Typography variant="h2">Search Results</Typography>
      {filteredServices.length > 0 ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredServices.map((service) => (
            <Box
              key={service.id}
              sx={{
                width: 300,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', marginBottom: '10px' }}
              />
              <Typography variant="h3">{service.title}</Typography>
              <Typography>{service.description}</Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography>No results found for "{searchQuery}"</Typography>
      )} */}
    </div>
  );
};

export default SearchResultsPage;