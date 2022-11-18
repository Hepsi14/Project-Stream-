import mongoose from  'mongoose';

const  modelschema=mongoose.Schema({
    name:{
        type:String,
       require:true
    },
    email:{
        type:String,
        reqiure:true
    },
    password:{
        type:String,
        required:true
    },
   phoneno:{
    type:String,
        required:true
   },
   isAdmin:{
    type:Boolean,
    default:true
   }
})

const Admin=mongoose.model('Admin',modelschema)
export default Admin