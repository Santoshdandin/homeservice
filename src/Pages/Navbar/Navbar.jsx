import React from 'react';

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
import { CardMedia } from '@mui/material';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const pages = ['Cost Guide', 'Blogs', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// import logo from '../../../public/Assets/Images/1.svg'




const Navbar = () => {

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

<AppBar position="static"  sx={{padding:'10px',bgcolor:'#6A8D92',color:'inherit'}} >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'} mx={'60px'}>
        <CardMedia
        sx={{  mr: 1,height:'70px',width:'110px' }}
        image="Assets/Images/Logo2.png"
      />

<Box sx={{  display:'flex'}}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color:'#2B061E', display: 'block',textTransform:'none',fontSize:'18px', fontWeight:'500',":hover":{textDecoration:'underline',transition:''} }}
            >
              {page}
            </Button>
          ))}
        </Box>

        </Box>

        
        
        

        
      </Toolbar>
    </Container>
  </AppBar>
    </Box>
    
  );
};

export default Navbar;