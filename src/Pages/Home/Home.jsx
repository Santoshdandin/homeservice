import React from 'react'
import SearchPage from './SearchPage'
import Box from '@mui/material/Box';
// import Slider from '../Home/ImageSlider'
import PopularProjects from './PopularProjects';
import BrowseByCategory from './BrowseByCategory';
// import Slide from './Slide';
import Playstore from './Playstore';
// import ReviewsSlider from './ReviewsSlider';
import ReviewSlickSlider from './ReviewSlickSlider';

const Home = () => {
  return (
    <Box bgcolor={'#fefefe'}>
      <SearchPage/>
      
      <Box maxWidth={{xs:'95%',md:'85%'}}  margin={'auto'} paddingBottom={'3rem'}>

      <PopularProjects/>
      <BrowseByCategory/>
      <Playstore/>
      {/* <ReviewsSlider/> */}
      <ReviewSlickSlider/>
      {/* <Slide/> */}

</Box>
      {/* <Slider/> */}
    </Box>
  )
}

export default Home