import React, { Component } from 'react';
import {Link} from 'react-scroll';



class Navbar extends Component {
    render() {
        return (
                   <div>
                     <nav className="navbar navbar-expand-sm  navbar-dark fixed-top " style={{ padding: "20px 10px ", 
                background: "rgba(0, 0, 0, 0.5)", 
                color:"#FFA500"}} >
                        <a className="navbar-brand"style={{color:"#FFEBCD"}} href="https://stackoverflow.com/questions/48966691/how-to-implement-a-scrollspy-with-react" >Ravi Shankar Mishra</a>
                            
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>


                            <div className="collapse navbar-collapse " id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                           <li className="nav-item" > <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>Home</Link></li>
                           <li className="nav-item"> <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>About</Link></li>
                            <li className="nav-item"><Link
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>Gallery</Link></li>
                            <li className="nav-item"><Link
                                activeClass="active"
                                to="events"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>Events</Link></li>
                            <li className="nav-item"><Link
                                activeClass="active"
                                to="videoList"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>Videos</Link></li>

                            <li className="nav-item"><Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration= {250} className="nav-link"style={{color:"#FFEBCD"}}>Contact</Link></li>          

                    
                            </ul>
                            </div> 
                        </nav> 
                       
                    </div>
               
        );
    }
}

export default Navbar;