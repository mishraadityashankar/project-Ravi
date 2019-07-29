const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const messageSchema = new Schema({
       _id:mongoose.Schema.Types.ObjectId,
       Name:{type:String,required:true
        },
       Address:{
           type:String, required:true
       },
       Contact:{
           type:Number,required:true
       },
       Age:{
           type:Number,required:true
       },
       Text:{
           type:String,required:true
       }
     
       


      

   

});
module.exports=mongoose.model('Message',messageSchema);