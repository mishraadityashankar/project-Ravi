const express =require('express');
const app=express();
const message_api=require('./apis/message_api');
const video_api=require('./apis/video_api');
const event_api=require('./apis/event_api');
const bodyParser=require('body-Parser');
const mongoose=require('mongoose');

const db= "mongodb://localhost:27017/Web";

app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());
app.use('/',message_api);
app.use('/video',video_api);
app.use('/event',event_api);
app.use('/uploads', express.static('uploads'));


mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
  if(err){
  	console.error("error! "+err);
  }
});
 
app.listen(4000, () => {
    console.log('Running on port 4000');
  });

 
