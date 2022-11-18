import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin from '../model/Adminschema.js'
import User from '../model/modelschema.js'


const getroute=async (req,res)=>{
    let _id=req.user._id
    const admin=await Admin.findOne({_id})
    if(admin) return res.send(admin)
    const customer=await User.findOne({_id})
    if(customer) return res.send(customer)
}
const register=async(req,res)=>{
    
    try {
        const find_email= await Admin.findOne({email:req.body.email})
        if(find_email) return res.send('already registered')
        const salt_route=10
        bcrypt.hash(req.body.password,salt_route,async function(err,hash){
            const data= await Admin.insertMany({
                name:req.body.name,
                email:req.body.email,
                password:hash,
                phoneno:req.body.phoneno
            })
            if(data) return res.send(data)
        })
        
    
    } catch (error) {
         return res.send(error.message)
    }
    }

    const login=async(req,res)=>{
        try {
            const find_email= await Admin.findOne({email:req.body.email})
            const find_email1= await User.findOne({email:req.body.email})
            
            if(find_email){
                // if(find_email.password===req.body.password) return res.send('Login Successfull')
                bcrypt.compare(req.body.password,find_email.password,async function(err,result){
                   
                    if(result ==true){
                      const token= jwt.sign({_id:find_email._id},''+process.env.SECRETKEY)
                      return res.send(token)
                        //  return res.send('Login success')
                    }
                    return res.send('incorrect password')
                })
                
            }
            else if(find_email1){
            // if(find_email.password===req.body.password) return res.send('Login Successfull')
            bcrypt.compare(req.body.password,find_email1.password,async function(err,result){
               
                if(result ==true){
                  const token= jwt.sign({_id:find_email1._id},''+process.env.SECRETKEY)
                  return res.send(token)
                    //  return res.send('Login success')
                }
                return res.send('incorrect password')
            })
            
        }
            else return res.send('There is no Email')
        } catch (error) {
            return res.send(error.message)
        }
    }

    export {register,login,getroute}
