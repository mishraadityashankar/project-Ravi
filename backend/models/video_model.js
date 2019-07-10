const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const videoSchema = new Schema({
       _id:mongoose.Schema.Types.ObjectId,
       VideoLink:{type:String,required:true
        },
       Title:{
           type:String, required:true
       },
     
       Description:{
           type:String,required:true
       }
     
       


      

   

});
module.exports=mongoose.model('Video',videoSchema);