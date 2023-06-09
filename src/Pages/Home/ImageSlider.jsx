import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/system';

const images = [
  'https://content.georgiancollege.ca/wp-content/uploads/plumbing-techniques-skilled-trades-1700x500px-1-1536x452.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQj8IFtX45Wzr60EeNiBYVLoubxeSv9zbK_w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WfwDF7MisjuTDdb9lxh12b9Idp1-BgWVAA&usqp=CAU',
];

const AppWrapper = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ImageSlider = styled(Carousel)({
  '& .slide img': {
    maxHeight: '100vh',
  },
});

const SearchBar = styled(TextField)({
  width: '50%',
  marginBottom: '20px',
});

const Slider = () => {
  return (
    <AppWrapper>
      <SearchBar label="Search" variant="outlined" />
      <ImageSlider autoPlay infiniteLoop  showThumbs={false}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </ImageSlider>
    </AppWrapper>
  );
};

export default Slider;