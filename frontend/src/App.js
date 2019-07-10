import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import VideoList from "./components/VideoList";
import Gallery from "./components/Gallery";


function App() {
  return (
    
   <div className="App">
               <Navbar />
                <Home/>
                <About/> 
                <Gallery/>
                <Events/>
                <VideoList/>
                <Contact/>
    </div> 
    
   

  );
}

export default App;
