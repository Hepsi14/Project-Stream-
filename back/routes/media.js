import express  from "express"
import mediaController from "../controller/mediacontroller.js"
// import Media from "../model/mediaSchema"

import multer from "multer"
import fs from "fs"
import path from "path"
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
            fs.mkdirSync("public")
        }
        if(!fs.existsSync('public/videos')){
            fs.mkdirSync('public/videos')
        }
        cb(null, 'public/videos')
    },
    filename:function(req,file,cb){
        cd(null,Date.now = file.originalname)
    }
})

 const upload=multer({
    storage:storage,
    fileFilter:function(req,filw,cb){
        var ext = path.extname(file.originalname);
        if( ext !='.mkv' && ext !='.mp4'){
            return cb( new Error('only video are allowed!'));
        }
        cb(null,true)
    }
 })

const route=express.Router()
//get all
route.get('/',mediaController.getall)

//post create 
route.post('/create',upload.fields([{
    name:'videos',
    maxCount:5,
}]),mediaController.create)

export default route