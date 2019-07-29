const express =require('express');
const app=express();
const message_api=require('./apis/message_api');
const video_api=require('./apis/video_api');
const event_api=require('./apis/event_api');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path= require('path');

const db= process.env.MONGOLAB_URI || "mongodb://localhost:27017/Web";
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());
app.use('/',message_api);
app.use('/video',video_api);
app.use('/event',event_api);
app.use('/uploads', express.static('uploads'));

if(process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname,  'frontend','build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,  'frontend','build','index.html'));
  });
}


mongoose.Promise=global.Promise;
mongoose.connect(db, { useNewUrlParser: true },function(err){
  if(err){
  	console.error("error! "+err);
  }
});
 
const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });

 
