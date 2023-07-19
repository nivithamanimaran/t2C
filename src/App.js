import React from 'react';
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Home from './containers/Home/Home';
import Footer from './containers/Footer/Footer';
import Expertise from './containers/Expertize/Expertise';
import Aboutus from './containers/Aboutus/Aboutus';
import Getintouch from './containers/Getintouch/Getintouch';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
     <Route path='home' element={<Home/>}/>
     <Route path='Footer' element={<Footer/>}/>
     <Route path='Expertise' element={<Expertise/>}/>
     <Route path='Aboutus' element={<Aboutus/>}/>
     <Route path='Getintouch' element={<Getintouch/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
