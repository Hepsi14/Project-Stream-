import User from '../model/modelschema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Plan from '../model/planSchema.js'

const getroute=(req,res)=>{
    res.send('working')
}

const register=async(req,res)=>{
    
    try {
        const find_email= await User.findOne({email:req.body.email})
        if(find_email) return res.send('already registered')
        const salt_route=10
        bcrypt.hash(req.body.password,salt_route,async function(err,hash){
            const data= await User.insertMany({
                name:req.body.name,
                email:req.body.email,
                password:hash
            })
            if(data) return res.send('User Added')
        })
    
    } catch (error) {
         return res.send(error.message)
    }
    }

const buyPlan=async(req,res)=>{
    let planId=req.body.planId
    let _id=req.user._id
    try {
        const getplan=await Plan.findOne({planId:planId})
        if(getplan){
            const data=await User.updateOne({_id},{$set:{
                isSubscribed:true,
                plan:getplan
            }})
            if(data) return res.send("Successfull subscribed")
        }
    } catch (error) {
        return res.send(error.message)
    }
}

export {getroute, register,buyPlan}