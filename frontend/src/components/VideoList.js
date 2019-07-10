import React, { Component } from 'react';

import axios from 'axios';

const Video= props =>(
    <div className="col-lg-4 col-md-6">
    <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
    
      <iframe className="embed-responsive-item" title={props.video.Title} src={props.video.VideoLink} style={{height:" 101%"}}
        allowFullScreen></iframe> /></div>
    
    
        <h4 style={{textAlign:"center"}}>{props.video.Title}</h4>
        <p style={{textAlign:"center"}}>{props.video.Description}</p>
  
    </div>
    )

class VideoList extends Component {
    constructor(props){
        super(props);
        this.state={ videos : []};
    }
  
    componentDidMount(){
     
      axios.get('/video/getvideo')
      .then(response => {
          this.setState({videos: response.data});
      })
      .catch(function (error) {
          console.log(error);
      })  
    }
  
  
    componentDidUpdate(){
     
        axios.get('/video/getvideo')
        .then(response => {
            this.setState({videos: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })  
      }


    videolist(){
        return this.state.videos.map(function(currentVideo, i) {
          //console.log(currentVideo);
          return <Video video={currentVideo} key={i} />;
      });
    }
    
    render() {
     return (
         <div style={{background:"	#B0C4DE"}}>
                <div className="container pb-5  pt-5" id="videoList">
                    <h1 className="text-center text-capitalize pt-5">Videos</h1>
                    <hr className="w-25 mx-auto pt-5"></hr>
                    <div className="row ">
                      {this.videolist() }
                    </div>
                </div>
        </div>
             );
    }
}
 export default VideoList;