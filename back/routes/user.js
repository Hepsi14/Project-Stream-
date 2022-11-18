import express from 'express'
import User from '../model/modelschema.js'
import {buyPlan, getroute,register} from '../controller/user.js'
import auth from '../middleware/auth.js'

const route=express.Router()

route.get('/',getroute)

route.post('/register',register)
route.put('/buyplan',auth,buyPlan)


export default route