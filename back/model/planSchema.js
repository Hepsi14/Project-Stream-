import mongoose from  'mongoose';

const  modelschema=mongoose.Schema({
    price:{
        type:String,
       require:true
    },
    validity:{
        type:String,
        reqiure:true
    },
    description:{
        type:String,
        
    },
   planId:{
    type:String,
        required:true
   }
})

const Plan=mongoose.model('Plan',modelschema)
export default Plan