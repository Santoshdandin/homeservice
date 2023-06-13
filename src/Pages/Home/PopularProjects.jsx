import React from 'react'
import Typography from '@mui/material/Typography';
import { Button,Box, CardActionArea, CardActions, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from "react-slick";

const PopularProjects = () => {

    const projects = [
        {img:'https://hometriangle.com/web/assets/images/x-300x200/jpg/ac-repair-services.jpg',
    title:'AC Services',
min:500,
max:'3k'},

{img:'https://hometriangle.com/web/assets/images/x-300x200/jpg/pest-control.jpg',
title:'Pest control',
min:900,
max:'2k'},

{img:'https://hometriangle.com/web/assets/images/x-300x200/jpg/house-cleaning.jpg',
title:'House cleaning',
min:'2k',
max:'10k'},

{img:'https://hometriangle.com/web/assets/images/x-300x200/jpg/house-painting.jpg',
title:'House painting',
min:'10k',
max:'50k'},

{img:'https://hometriangle.com/web/assets/images/x-300x200/jpg/home-renovation.jpg',
title:'Home Renovation',
min:'25k',
max:'3L'},

    ]


  return (
    <Box >
        <Box mb={'7rem'}>
        <Typography fontSize={'26px'} color={'#343f52'} fontWeight={'700'} mb={'20px'} px={'15px'}>Popular Projects</Typography>
<Box>
    <Box display={'flex'} columnGap={'40px'}>
        {projects.map(({img,title,min,max})=>{
            return (

              <Link href={`services/${title}`} color="inherit" underline="none">  <Card sx={{ maxWidth: 190,cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'left',padding:'15px', pb:'15px'}}>
          <Typography color={'#11151e'} fontSize={'16px'} mb={'5px'}  >
            {title}
          </Typography>
          <Typography color={'#3f78e0'} fontSize={'18px'} fontWeight={500}>
        ₹{min} - ₹{max}
        </Typography>
          
        </CardContent>
      
      
    </Card></Link>

            )
        })}
    
    
    </Box>

</Box>
        </Box>

        
    </Box>
  )
}

export default PopularProjects