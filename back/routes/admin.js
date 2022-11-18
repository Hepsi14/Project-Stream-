import express from 'express'
import { register,login, getroute } from '../controller/admin.js'
import {addplan,getplans} from '../controller/plan.js'
import auth from '../middleware/auth.js'

const route=express.Router()

// route.get('/',getroute)

route.post('/register',register)
route.post('/login',login)
route.get('/getuser',auth,getroute)
route.post('/addplan',addplan)
route.get('/getplans',getplans)

export default route