import bodyParser from "body-parser";
import Media from "../model/mediaSchema.js";

const getall = async(req,res)=>{
    try {
const media=await Media.find()
    }
    catch (error) {
        return res.send(error.message)
   }
}

// Backendurl/public/videos/file_name.mp4

const create= async(req,res)=>{
 const   {name}=req.body;
 let videosPaths = [];

 if(Array.isArray(req.files.videosPaths) && req.files.videos.length >0){
 for(let video of req.files.videos){
    videosPaths.push('/' +video.path )
 }
}
try{
    const createdMedia = await Media.create({
        name,
        videos: videosPaths
    })
    res.json({message:'Media Created succesfully',createdMedia})
    
}catch(error){
    console.log(error)
}
}
export default {getall,create}