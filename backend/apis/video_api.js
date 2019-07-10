const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Video=require('../models/video_model');

router.get('/getvideo',(req,res) =>{
    Video.find({})
    .exec(function(err,video){
      if(err){console.log("error in retrieving msgs");
      }
      else{
        res.json(video);
      }
       });
     
    
});

router.post('/addvideo',(req,res) =>{
 
    const video = new Video({
        _id:new mongoose.Types.ObjectId(),
        VideoLink: req.body.VideoLink,
        Title: req.body.Title,
        Description: req.body.Description,
       
    });

     

   
    video.save().then(
        res.json(video)
    ).catch(err=>console.log('the error is' +err));


});
module.exports=router;
