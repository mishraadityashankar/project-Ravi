import React, { Component } from 'react';

import axios from 'axios';


const Event= props =>(
  <div className="col-lg-4 col-md-6 pt-2" >
  
  
      <img src={props.event.EventPic} alt="event" className="img-fluid  " ></img> 
  
  
     
      <p style={{textAlign:"center"}}>{props.event.Description}</p>

  </div>
  )

class Events extends Component {

  constructor(props){
    super(props);
    this.state={ events : []};
}


  componentDidMount(){
     
    axios.get('/event/getevent')
    .then(response => {
        this.setState({events: response.data});
    })
    .catch(function (error) {
        console.log(error);
    })  
  }


  componentDidUpdate(){
    axios.get('/event/getevent')
    .then(response => {
        this.setState({events: response.data});
    })
    .catch(function (error) {
        console.log(error);
    }) 
    }




   
  eventlist(){
    return this.state.events.map(function(currentEvent, i) {
      //console.log(currentEvent);
      return <Event event={currentEvent} key={i} />;
  });
}
    
    render() {
     return (
      <div style={{background:"#EEE8AA"}}>
                <div className="container pb-5  pt-5" id="events">
                    <h1 className="text-center text-capitalize pt-5">Events</h1>
                    <hr className="w-25 mx-auto pt-5"></hr>
                    <div className="row ">
                      {this.eventlist() }
                    </div>
                </div>
        </div>
             );
    }
}

export default Events;