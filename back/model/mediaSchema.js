import mongoose from  'mongoose';
// import route from '../routes/media';

const  mediaSchema=mongoose.Schema(
    {
    name:{
        type:String,
       require:true
    },
    
    video:[{type: String}],
       
    },{
        timestamps:true
    }
  

)

const Media=mongoose.model('Media',mediaSchema)
export default Media


