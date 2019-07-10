import React, { Component } from 'react';

import image from "../images/image.jpg";



class Home extends Component {
    render() {
        return (
            <div className=" bg-dark"style={{
              position: "relative",
            // maxWidth: "1300px",
            margin: "0 auto"}} id="home">
            <img className="img-fluid" src={image} alt="Notebook" 
            // 
            >

            </img>
                <div className="content"style={{position: "absolute",
                bottom: "0",
               
                 /* Fallback color */
                background: "rgba(0, 0, 0, 0.5)", /* Black background with 0.5 opacity */
                color:"#f1f1f1",
                width: "100%",
                padding: "20px"}} >
              <h1>Heading</h1>
              <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei.</p>
            </div>
          </div>
        );
    }
}

export default Home;