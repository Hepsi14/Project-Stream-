// import express  from "express";
// import bodyParser from "body-parser"
// import mongoose from "mongoose";
// import route from "./routes/user.js";
// import cors from 'cors'

// const app=express();


// //  app.use('/data',data)
// app.use(bodyParser.json())
//  app.use(bodyParser.urlencoded({extended:true}))
//  app.use(bodyParser.text())
//  app.use(cors())

//  mongoose.connect('mongodb://localhost/data')
// .then(()=>console.log('db connected'))
// .catch((e)=>console.log('error'))
 
// app.use('/api',route)

// app.listen(3000,()=>{
//     console.log('this port is ready')
// })

import express  from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import route from "./routes/user.js";
import cors from 'cors'
import mediaRoutes from "./routes/media.js";
import admin from './routes/admin.js'


const app=express();


app.use('/api/v1/media',mediaRoutes)
//  app.use('/data',data)
app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))
 app.use(bodyParser.text())
 app.use(cors())

 mongoose.connect('mongodb://localhost/data')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))
 
app.use('/api',route)
app.use('/api/admin',admin)


app.listen(3000,()=>{
    console.log('this port is ready')
})
