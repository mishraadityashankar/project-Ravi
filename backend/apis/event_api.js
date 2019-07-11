const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Event=require('../models/events_model');
const multer = require('multer');


const storage= multer.diskStorage({
  destination : (req,file,cb) =>{
    cb(null,'./uploads/');
  },
  filename : (req,file,cb) => {
    cb(null,file.originalname);
  }
});
const upload = multer({storage:storage});

router.get('/getevent',(req,res) =>{
   Event.find({})
    .exec(function(err,event){
      if(err){console.log("error in retrieving events");
      }
      else{
        res.json(event);
      }
       });
     
    
});


router.post('/addevent',upload.single('EventPic'),(req,res) =>{
 
    const event = new Event({
        _id:new mongoose.Types.ObjectId(),
        EventPic:req.file.path,
        
        Description: req.body.Description,
       
    });

     

   
    event.save().then(
        res.json(event)
    ).catch(err=>console.log('the error is' +err));


});
module.exports=router;