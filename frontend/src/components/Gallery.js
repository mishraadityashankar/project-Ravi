import React, { Component } from 'react';
import pic3 from "../images/pic3.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import fac2 from "../images/fac2.jpg";
import fac7 from "../images/fac7.jpg";
// import image from "../images/image.jpg";
class Gallery extends Component {
    render() {
        return (
        <div style={{background:"#C0C0C0"}}>
            <div className="container pb-5  pt-5" id="gallery">
                <h1 className="text-center text-capitalize pt-5">Gallery</h1>
                <hr className="w-25 mx-auto pt-5"></hr>
                <div className="row" style={{padding: "4px 4px",outlineStyle: "solid", outlineWidth: "medium",outlineColor:"black"}}>
                    <div className="col-xl-6 bg-dark" style={{padding: "0 4px"}}>
                       <a href={pic3} >
                        <img src={pic3} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>

                        <a href={fac7} >
                        <img src={fac7} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>
                    </div>
                   
                   
                    <div className="col-xl-3 bg-dark" style={{padding: "0 4px"}}>

                      <a href={image5} >
                      <img src={image5} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>

                       <a href={fac2} >
                      < img src={fac2} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>

                        <a href={image4} >
                        <img src={image4} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>
                    </div>



                    <div className="col-xl-3 bg-dark" style={{padding: "0 4px"}}>
                        
                        <a href={image7} >
                        <img src={image7} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>



                        <a href={image6} >
                        <img src={image6} alt="event" className="img-fluid  "  style={{ marginTop: "8px",
                        verticaAlign:" middle",width:"100%"}}></img></a>

                         <a href={image3} >
                         <img src={image3} alt="event" className="img-fluid  " style={{ marginTop: "8px",
                          verticaAlign:" middle",width:"100%"}}></img></a>
                    </div>

                </div>
            </div>
        </div>    
        );
    }
}

export default Gallery;