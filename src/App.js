// import logo from './logo.svg';

import './App.css';
import Allroutes from './Allroutes/Allroutes.jsx';
import Navbar from './Pages/Navbar/Navbar';

import Footer from './Pages/Footer/Footer';
import HomeServiceList from './Pages/Home/HomeServiceList';
import Slide from './Pages/Home/Slide';
import ImageSlider from './Pages/Home/ImageSlider';

function App() {
  return (
<div>
        <Navbar/>
        <Allroutes/>
        <Footer/>
        {/* <ImageSlider/> */}
        {/* <HomeServiceList/> */}
</div>
        
     
    
  );
}

export default App;
