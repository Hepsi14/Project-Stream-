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
    isAdmin:{
        type:Boolean,
        default:false
    },
    isSubscribed:{
        type:Boolean,
        default:false
    },
    plan:{
        type:Object
    }
})

const User=mongoose.model('User',modelschema)
export default User