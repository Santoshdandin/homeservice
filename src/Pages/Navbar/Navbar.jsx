import React, { useState, useEffect,useRef } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { CardMedia, Link } from '@mui/material';

import "../Navbar/Navbar.css";

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const pages = ['services', 'blogs', 'login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// import logo from '../../../public/Assets/Images/1.svg'




const Navbar = () => {

  const [navBackground, setNavBackground] = useState("appBarTransparent");
   const navRef = useRef();
   navRef.current = navBackground;
   useEffect(() => {
     const handleScroll = () => {
       const show = window.scrollY > 50;
       if (show) {
         setNavBackground("appBarSolid");
       } else {
         setNavBackground("appBarTransparent");
       }
     };
     document.addEventListener("scroll", handleScroll);
     return () => {
       document.removeEventListener("scroll", handleScroll);
     };
   }, []);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  

  return (
    <Box >
      <Box  bgcolor={'#FF914D'} color={'#fff !important'} display={'flex'} justifyContent={'center'} alignContent={'center'} padding={'0.8rem'}>
        <Box pr={'1.5rem'} alignSelf={'center'} textAlign={'center'} borderRight={'1px solid #dee2e6 !important'}>
        <Typography fontSize={'14px'} fontWeight={700} >VERIFIED EXPERTS</Typography>
        </Box>

        <Box textAlign={'center'} padding={'0 30px'}>
        
        <Rating
        name="text-feedback" 
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{color:'white',fontSize:'14px',fontWeight:'100' }} fontSize="inherit" />}
      />
        <Typography  fontSize={'14px'} fontWeight={700}>REVIEWED BY MILLIONS</Typography>
        </Box>

        <Box pl={'1.5rem'} alignSelf={'center'} textAlign={'center'} borderLeft={'1px solid #dee2e6 !important'}>
        <Typography fontSize={'14px'} fontWeight={700}>FREE QUOTES</Typography>
        </Box>
        

      </Box>

<Box  className={navRef.current}  sx={{padding:'10px',color:'#343f52'}} >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} mx={{md:'60px',xs:'10px'}}>
<Link href='/'>
<img src='/Assets/Images/Logo2.png' width={'110px'} height={'75px'}/>
        {/* <CardMedia
        sx={{  height:'75px',width:'110px' }}
        image="/Assets/Images/Logo2.png"
      /> */}
      </Link>

<Box sx={{  display:'flex'}}>
          {pages.map((page) => (
           <Link href={`/${page}`} color="inherit" underline="none"> <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: 'block',color:'inherit',textTransform:'capitalize',fontSize:'18px', fontWeight:'500',textDecoration:'bold',":hover":{color:'#ff914d'} }}
            >
              {page}
            </Button> </Link>
          ))}
        </Box>

        </Box>

        
        
        

        
      </Toolbar>
    </Container>
  </Box>
    </Box>
    
  );
};

export default Navbar;