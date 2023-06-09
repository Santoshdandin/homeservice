import React from 'react'
import SearchPage from './SearchPage'
import Box from '@mui/material/Box';
import Slider from '../Home/ImageSlider'

const Home = () => {
  return (
    <Box bgcolor={'#6A8D92'}>
      <SearchPage/>
      {/* <Slider/> */}
    </Box>
  )
}

export default Home