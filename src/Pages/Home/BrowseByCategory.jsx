

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BrowseByCategory = () => {

    const tabNames = [{id:0,title:'Maintanance'},{id:1,title:'Remodelling'},{id:2,title:'Appliances'},{id:3,title:'Events'},{id:4,title:'Personal'}]

    const maintenance = [
        {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/house-cleaning.webp',
    title:'House Cleaning',
min:'2k',
max:'25k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/painting-1.webp',
title:'House Painting',
min:'6k',
max:'3L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/termite.webp',
title:'Pest Control Services',
min:'2k',
max:'10k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/watertank1.webp',
title:'Water Tank Cleaning',
min:'10k',
max:'50k'},

    ]

    const remodelling = [
        {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/home-renovation-1.webp',
    title:'Home Renovation',
min:'25k',
max:'3L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/kitchen-renovation-1.webp',
title:'Kitchen Renovation',
min:'15k',
max:'1.5L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/bathroom-renovation-1.webp',
title:'Bathroom Renovation',
min:'5k',
max:'50k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/mosquito-mesh-2x.webp',
title:'Mosquito Net Installation',
min:'3k',
max:'20k'},

    ]

    const appliances = [
        {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/ac-repair-1.webp',
    title:'AC Repair Services',
min:500,
max:'5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/gas-stove.webp',
title:'Gas Stove Repair',
min:400,
max:'2.5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/washing-machine-repair-1.webp',
title:'Washing Machine Repair',
min:'400',
max:'6.5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/refrigerator.webp',
title:'Refrigerator Repair',
min:'400',
max:'7.5k'},

    ]


    const events = [
        {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/wedding-planners.webp',
    title:'Wedding Planners',
min:'50k',
max:'6L+'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/party-planners.webp',
title:'Party Planners',
min:'6k',
max:'3L+'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/wedding-photography.webp',
title:'Wedding Photography',
min:'50k',
max:'6L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/stage-decorator.webp',
title:'Stage Decoration',
min:'10k',
max:'5L'},

    ]

    const personal = [
        {img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/makeup-artist.jpg',
    title:'Makeup Artist'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/physiotherapy.jpg',
title:'Physiotherapy'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/fitness-trainers.jpg',
title:'Fitness Trainer'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/swimming-classes.jpg',
title:'Swimming Classes',
},

    ]


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box >
        <Box mb={'7rem'}>
        <Typography fontSize={'26px'} color={'#343f52'} fontWeight={'700'} mb={'20px'} px={'15px'}>Browse by Category</Typography>
<Box>


<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 'none', borderColor: 'divider' }}>
        <Tabs sx={{textTransform:'lowercase'}} value={value}  variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile onChange={handleChange} aria-label="basic tabs example">
            {tabNames.map(({title,id})=>{
                return (
                    <Tab sx={{color:'#343f52',fontWeight:700,textTransform:'capitalize',fontSize:'16px'}}  label={title} {...a11yProps({id})} />
                )
            })}
          {/* <Tab  label="Maintenance" {...a11yProps(0)} />
          <Tab label="Remodelling" {...a11yProps(1)} />
          <Tab label="Appliances" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>

     

      <TabPanel value={value} index={0}>
      <Box display={'grid'} gridTemplateColumns={{xs:'1fr 1fr',md:'1fr 1fr 1fr 1fr'}} gap={'20px'}>
        {maintenance.map(({img,title,min,max})=>{
            return (

              <Link href={`/services/${title}`} color="inherit" underline="none">    <Card sx={{cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="200"
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
      
      
    </Card> </Link>

            )
        })}
    
    
    </Box>
      </TabPanel>


      <TabPanel value={value} index={1}>
      <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'20px'}>
        {remodelling.map(({img,title,min,max})=>{
            return (

              <Link href={`/services/${title}`} color="inherit" underline="none">     <Card sx={{cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="200"
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
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'20px'}>
        {appliances.map(({img,title,min,max})=>{
            return (

              <Link href={`/services/${title}`} color="inherit" underline="none">  <Card sx={{ cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="200"
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
      </TabPanel>

      <TabPanel value={value} index={3}>
      <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'20px'}>
        {events.map(({img,title,min,max})=>{
            return (

              <Link href={`/services/${title}`} color="inherit" underline="none">    <Card sx={{ cursor:'pointer' }}>
      
        <CardMedia
          component="img"
          height="200"
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
      </TabPanel>

      <TabPanel value={value} index={4}>
      <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={'20px'}>
        {personal.map(({img,title})=>{
            return (

              <Link href={`/services/${title}`} color="inherit" underline="none">     <Card sx={{ cursor:'pointer',bgcolor:'#fff' }}>
      
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'left',padding:'15px', pb:'15px'}}>
          <Typography color={'#11151e'} fontSize={'16px'} mb={'5px'}  >
            {title}
          </Typography>
          
          
        </CardContent>
      
      
    </Card></Link>

            )
        })}
    
    
    </Box>
      </TabPanel>
    </Box>
    

</Box>
        </Box>

        
    </Box>



    
  );
}


export default BrowseByCategory