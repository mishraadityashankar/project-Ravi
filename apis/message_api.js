const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const Message=require('../models/message_model');

router.post('/addmessage',(req,res) =>{
 
    const message = new Message({
        _id:new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Address: req.body.Address,
        Contact: req.body.Contact,
        Age: req.body.Age,
        Text: req.body.Text
    });

     

   
    message.save().then(
        res.json(message)
    ).catch(err=>console.log('the error is' +err));


});
module.exports=router;
