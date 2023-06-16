import React from "react";
import { useParams } from "react-router-dom";

import {CardMedia,Typography,Box,Accordion,AccordionSummary,AccordionDetails} from "@mui/material";

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ReviewsSlider from "../Home/ReviewsSlider";
import servicesData from '../../Data/ServecesData.json';
import BrowseByCategory from "../Home/BrowseByCategory";
import GetQuote from "./GetQuote";


const ServiceSelected = () => {
    const params = useParams();
    const searchQuery = params.name
    const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const videos = ["https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/MultimediaAssets/Videos/67_MurdochUniversityDubai_MultimediaVideo_1684834762925-Welcome-to-Murdoch-University-Dubai.mp4?time=1684955267418"]
  return (
    <Box >
        {filteredServices.length>0 ? (<Box>{filteredServices.map((service)=>{
            return (
                <>
                <Box  
        sx={{
          minWidth: "100%",
          minHeight: "90vh",
          height: "max-content",
          backgroundColor:'#f1f5fd'
          
        }}
      >
       

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={'center'}
          position={"relative"}
          sx={{
            minWidth: "100%",
            minHeight: "90vh",
            height: "max-content",
          }}
        >
          

          {/* hero section content */}

          <Box
            display={"flex"}
            flexDirection={"column"} 
            pb={'20px'}
            width={"100%"}
            maxWidth={"73rem"}
            height={"maxContent"}
            alignItems={{ xs: "center", md: "flex-start" }}
            paddingLeft={{ xs: "0.75rem", md: "1.5rem" }}
            paddingRight={{ xs: "0.75rem", md: "1.5rem" }}
            position={"relative"}
            textAlign={"left"}
            color={"#FFFFFF"}
            justifyContent={'center'}
          >
            {/* hero title */}

            <Box
              display={{xs:'grid',md:"flex"}} gridTemplateColumns={'1fr'} gap={'40px'}
              justifyItems={{md:"center",xs:'center'}}  pb={{xs:'30px'}}
            >
              {/* Image */}
              <Box >
                <Box
                  width={{md:"300px",xs:'200px'}}
                  height={{md:"300px",xs:'200px'}}
                  borderRadius={"1.25rem"}
                  overflow={"hidden"}
                  boxShadow={"rgba(0, 0, 0, 0.25) 0rem 0.25rem 0.25rem"}
                  marginRight={"1.5rem"}
                >
                  <CardMedia
                    image={service.image}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Box>

              {/* Heading */}

              <Box display={'flex'} flexDirection={'column'}  alignItems={{xs:'center',md:'flex-Start'}}>
                <Typography
                color={'#343f52'}
                  fontSize={"3rem"}
                  fontWeight={700}
                  lineHeight={"3rem"}
                  textTransform={'capitalize'}

                >
                  {service.title}
                </Typography>
                <Box>
                  <Typography
                    fontSize={"1.3rem"}
                    color={"#adb2b9"}
                    fontWeight={600}
                    mt={"8px"}
                  >
                    {service.description}
                  </Typography>
                </Box>

                {/* fee Boxes */}

            <Box
              display={{ md: "flex", xs: "grid" }}
              gridTemplateColumns={"1fr 1fr"}
              gap={"0.75rem"}
              columnGap={"0.75rem"}
              flexDirection={"row"}
              maxWidth={"70rem"}
              marginTop={"2.75rem"}
              width={"100%"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={{md:"10rem",xs:'8rem'}}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  Great Value
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Annual Tuition (UG)
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={{md:"10rem",xs:'8rem'}}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  Elite Expert
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Annual Tuition (PG)
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={{md:"10rem",xs:'8rem'}}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
                  Vetted
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Total Scholarships
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(0, 0, 0, 0.75)"}
                borderRadius={"0.625rem"}
                padding={"1rem"}
                width={{md:"10rem",xs:'8rem'}}
              >
                <Typography
                  fontSize={"1rem"}
                  fontWeight={600}
                  textAlign={"center"}
                  color={"rgb(255,255,255)"}
                >
               <Rating
        name="text-feedback" 
        defaultValue={service.rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{color:'gray',fontWeight:'100' }} fontSize="inherit" />}
      />
                </Typography>
                <Typography
                  color={"rgb(126, 138, 149)"}
                  fontSize={"0.75rem"}
                  fontWeight={600}
                  textAlign={"center"}
                >
                  Total Courses
                </Typography>
              </Box>
            </Box>

            {/* Get Quote */}

            <GetQuote service={service}/>
                
              </Box>
            </Box>

            

            
          </Box>
        </Box>
      </Box>

      <Box bgcolor={'#fefefe'}>
      <Box  py={'30px'} maxWidth={{xs:'95%',md:'85%'}}  margin={'auto'} paddingBottom={'3rem'}>

{/* Video */}

<Box
margin={"auto"}
mt={"48px"}
width={"100%"}
height={"100%"}
alignSelf={"center"}
maxWidth={"1168px"}
>
<Typography
 position={"relative"}
 color={"rgb(30, 40, 51)"}
 fontSize={{ xs: "1.5rem", md: "2.5rem" }}
 textAlign={"left"}
 marginBottom={"1rem"}

 fontWeight={700}
 sx={{
   ":after": {
     content: `" "`,
     position: "absolute",
     bottom: "0px",
     left: "0px",
     height: "0.25rem",
     width: "5.25rem",
     borderRadius: "0.25rem",
     background: "#ff914d",
   },
 }}
>
 Explore Working
</Typography>

<Box
 width={"100%"}
 maxWidth={"100%"}
 display={"grid"}
 gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr 1fr" }}
 gap={"0.5rem"}
 padding={"1rem 0rem"}
>
 {videos.map((el) => {
   return (
       <Card component="li" sx={{ minWidth: 250,height:250 }}>
       <CardCover>
         <video
           muted
           controls
         >
           <source
             src={el}
             type="video/mp4"
           />
         </video>
       </CardCover>
       
     </Card>
   );
 })}


</Box>
</Box>


{/* Things You Should Know */}

<Box
margin={"auto"}
my={"80px"}
width={"100%"}
height={"100%"}
alignSelf={"center"}
maxWidth={"1168px"}
>
<Typography
 position={"relative"}
 color={"rgb(30, 40, 51)"}
 fontSize={{ xs: "1.5rem", md: "2.5rem" }}
 textAlign={"left"}
 marginBottom={"1rem"}

 fontWeight={700}
 sx={{
   ":after": {
     content: `" "`,
     position: "absolute",
     bottom: "0px",
     left: "0px",
     height: "0.25rem",
     width: "5.25rem",
     borderRadius: "0.25rem",
     background: "#ff914d",
   },
 }}
>
 Things You Should Know
</Typography>

<Box >
<Accordion sx={{marginTop:'10px',padding:'15px', borderRadius:'5px',":before":{height:'0px'}}}>
<AccordionSummary
 expandIcon={<ExpandMoreIcon />}
 aria-controls="panel1a-content"
 id="panel1a-header"
>
 <Typography color={'rgb(59, 59, 60)'} fontSize={'1.5rem'} fontWeight={700} >Overview</Typography>
</AccordionSummary>
<AccordionDetails>
 <Typography color={'#101010'} fontSize={'1rem'} fontWeight={500}>
 {service.description}
 </Typography>
</AccordionDetails>
</Accordion>

<Accordion sx={{marginTop:'10px',padding:'15px', borderRadius:'5px',":before":{height:'0px'}}}>
<AccordionSummary
 expandIcon={<ExpandMoreIcon />}
 aria-controls="panel2a-content"
 id="panel2a-header"
>
 <Typography color={'rgb(59, 59, 60)'} fontSize={'1.5rem'} fontWeight={700}>Summary</Typography>
</AccordionSummary>
<AccordionDetails>
 <Typography color={'#101010'} fontSize={'1rem'} fontWeight={500}>
 Admission requirements varies from country country. Kindly contact our admissions counsellor for more informtion!
 </Typography>
</AccordionDetails>
</Accordion>
 


</Box>
</Box>

<Box paddingTop={'60px'}>

<ReviewsSlider/>
</Box>

<BrowseByCategory/>


</Box>

      </Box>

      
                </>
            )
        })}</Box>
        ) : (
        <Typography textAlign={'center'} fontSize={'35px'}>No results found for "{searchQuery}"</Typography>
      )}

        



        
    </Box>
    
  )
}

export default ServiceSelected