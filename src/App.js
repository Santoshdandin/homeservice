// import logo from './logo.svg';

import './App.css';
import Allroutes from './Allroutes/Allroutes.jsx';
import Navbar from './Pages/Navbar/Navbar';
import { Box } from '@mui/material';
import Footer from './Pages/Footer/Footer';
import HomeServiceList from './Pages/Home/HomeServiceList';

function App() {
  return (
<div>
        <Navbar/>
        <Allroutes/>
        <Footer/>
        {/* <HomeServiceList/> */}
</div>
        
     
    
  );
}

export default App;
