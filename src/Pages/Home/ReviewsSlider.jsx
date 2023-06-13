import React from "react";
import { Box, Typography,Button } from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


import { useTheme } from '@mui/material/styles';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const ReviewsSlider = () => {

  const reviews = [{
    name:"Advik Sarthak",
    place:'Indiranagar, Bangalore',
    review:`“This place is the absolute best! My place was sparkling after they were finished every corner was cleaned. Loving my house ten times more after they've cleaned. I highly recommend these  guys thanks Subhabrata !!!”`,
  },

  {
    name:"Aditya Vats",
    place:'Whitefield, Bangalore',
    review:`“Great job by Krishna cleaning up a couple of resistant stains from my couch! He was gracious, friendly and gave clear instructions on how to deal with the couch after it's been cleaned. This is a great company and I'd use it again.`,
  },

  {
    name:"Mudit Siriki",
    place:'Indiranagar, Mumbai',
    review:`“I spoke with Priya on the phone about a moth situation - they helps with bed bugs - but she was really, really helpful. She told me how to handle the situation and offered a couple of different solutions. Highly recommended.”`,
  }

 
]

const styles = {
  dots: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    cursor:'pointer',
   
    
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'lightgray',
    margin: '0 5px',
    cursor:'pointer'
  },
  dotActive: {
    backgroundColor: '#ff914d',
  },
};

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Box
       
        alignItems={"center"}
        alignSelf={'center'}
        alignContent={'center'}
        display={"grid"}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        width={'95%'}
        borderRadius={'20px'}
        boxShadow={{md:'0rem 0.25rem 1.75rem rgba(30, 34, 40, 0.07) !important'}}
        margin={'auto'}
         mb={'9rem'}
         bgcolor={'#fff'}
         
         textAlign={'center'}
         justifyContent={'center'}
         justifyItems={'center'}
      >
       


<Box px={{ xs: "0px", md: "50px" }} mb={{xs:'20px'}} textAlign={'center'}  >
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {reviews.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box >
                <Typography
                sx={{overflowWrap:'break-word'}}
                
              color={"#60697B"}
              lineHeight={1.5}
              fontWeight={500}
              fontSize={"20px"}
              my={"30px"}
              width={'93%'}
            >
              {step.review}
            </Typography>

                 <Typography
                 textAlign={'center'}
            color={"#343f52"}
            lineHeight={1.2}
            fontWeight={700}
            fontSize={"18px"}
          >
            {step.name}
          </Typography>

          <Typography
          textAlign={'center'}
              color={"#60697B"}
              lineHeight={1.5}
              fontWeight={500}
              fontSize={"16px"}
              mb={"30px"}
            >
              {step.place}
            </Typography>
              </Box>
              
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div style={styles.dots}>
        {reviews.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              ...(index === activeStep ? styles.dotActive : {}),
            }}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </div>
      
      
    </Box>
          

        <Box width={{md:'100%',xs:'90%'}} >
          <img
            src="https://hometriangle.com/web/assets/images/review1.webp"
            width={"100%"} height={'120%'}
          />
        </Box>
      </Box>
  )
}

export default ReviewsSlider