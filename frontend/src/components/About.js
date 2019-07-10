import React, { Component } from 'react';

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import fac3 from "../images/fac3.jpg";
import fac7 from "../images/fac7.jpg";
import pic3 from "../images/pic3.jpg";

class About extends Component {
    render() {
        return (
                       <div style={{background:"#FFEBCD"}}>
                      
                       
                         <div className="container pb-5"  id="about">
                                <h1 className="text-center text-capitalize pt-3 mb-3">about us</h1>
                                <hr className="w-25 mx-auto pt-3"></hr>
                                <div className="row ">
                                <div className="col-xl-6 col-lg-6 pt-5 mt-4 ">
                                    {/* <img src={profile} className="img-thumbnail ml-5 mb-2 img-fluid rounded-circle " height="auto" max-width ="100%" alt="Cinque Terre"></img> */}
                                    <MDBContainer>
                                        <MDBCarousel
                                        activeItem={1}
                                        length={3}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1"
                                    >
                                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={fac7}
                                                alt="First slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Light mask</h3>
                                            <p>First text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={fac3}
                                                alt="Second slide"
                                            />
                                            <MDBMask overlay="black-strong" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Strong mask</h3>
                                            <p>Second text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="3">
                                            <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src={pic3}
                                                alt="Third slide"
                                            />
                                            <MDBMask overlay="black-slight" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                            <h3 className="h3-responsive">Slight Mast</h3>
                                            <p>Third text</p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                    </MDBContainer>
                                    </div>  
                                <div className="col-xl-6 col-lg-6 pt-4 pl-3">
                                    <h2 className="text-center">Ravi shankar mishra</h2>
                                    <hr></hr>
                                    <p>
                                    Ravi Shankar Mishra was born in the holy city of Varanasi (Banaras) in 1969. 
                                    He started dance education under the famous guru of Banaras Gharana (Banaras School of Dance) 
                                    late Shremati Alkhnanda Devi, world wide known dancer, 
                                    then afterwards under late Shree Pandey Maharaj and late shree Panchu Maharaj.
                                    After having completed his education in the Banaras Gharana Dance, he performed in many cities of India, 
                                    such as Delhi, Bombay, Calcutta, Madras, 
                                    Trivandrum, Jaipur, Lucknow, Allahabad, etc. beside different countries such as U.K., Switzerland, France, Italy,
                                     Spain, Mauritius, Belgium, Marocco, etc.
                                    His duet with his cousin Mata Prasad Mishra is one of the most famous representing of Banaras’s style of dance.
                                     Beside this, he has received a degree in Master of Arts in Literature Hindi.
                                    His work has been rewarded by many important prizes and honours, such as “Sangeet Bhaskar” by the 
                                    Ancient Art Center of Chandigarh, “Sangeet Praveen” by the Prayag Sangeet Samiti of Allahabad,
                                    “Sangeet Maratanda” by the Hindu Vishvidyalaya (Prayag), “Nritya Prakash” by the Kala Prakash of Varanasi. 
                                    He had the chance of getting honoured by the Prime Minister of India, and the Governor and the Chief Minister of Uttar Pradesh.
                                    He performed in Delhi Doordarshan (Indian National Television) in “Parakh”, dedicated to the tradition of Varanasi Classical Art of Music,
                                     and is Guest Artist of T.V. & Radio. He took part in the Hindi film “Tulsidas”. Besides being a 
                                    famous dancer, he is also an excellent tabla player.
                                   </p>
                                </div>
                                    
                                </div>
                                <div className="row pl-3">
                                    <p>Since 1998, he is the main exponent with flamenco dancer Ana la China in the highly acclaimed Flamenco-Kathak program “From Banaras to Jerez” 
                                        which has been played in many cities of Europe. He is also playing with different artists of western styles, with contemporary dancer Emilio Artessero 
                                        Quesada and with famous Swiss Jazz musicians such as Maurice Magnoni and Claude Jordan.
                                       Highly appreciated as a teacher he is invited regularly to give kathak workshops by the “Ateliers d’ethnomusicologie” in Geneva. He took part several times 
                                       at ”La Croisée des Cultures” project, animating various world dance and music workshops.
                                      Ravi Shankar Mishra is an empaneled artist of I.C.C.R. (International Council for Cultural Relations)</p>
                                </div>
                            </div>
                        </div>
           
        );
    }
}

export default About;