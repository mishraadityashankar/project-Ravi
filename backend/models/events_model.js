const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const eventSchema = new Schema({
       _id:mongoose.Schema.Types.ObjectId,
       EventPic:{type:String,required:true
        },
     
     
       Description:{
           type:String,required:true
       }
     
       


      

   

});
module.exports=mongoose.model('Event',eventSchema);