import express, { Router } from 'express'
import addplan from '../controller/plan.js'

const route=express.Router()

Router.post('/addplan',addplan)

export default Router