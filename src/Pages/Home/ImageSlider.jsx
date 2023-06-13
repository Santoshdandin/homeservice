import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div style={{textAlign:'center'}}>
        <h1>Hello 1</h1>
      </div>
      <div>
      <h1>Hello 2</h1>
      </div>
      <div>
      <h1>Hello 3</h1>
      </div>
    </Slider>
  );
};

export default ImageSlider;