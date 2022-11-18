import Plan from "../model/planSchema.js";

const addplan=async(req,res)=>{
    try {
        const data=await Plan.insertMany({
            price:req.body.price,
            validity:req.body.validity,
            description:req.body.description,
            planId:req.body.planId
        })
        if(data) return res.send('Plan Added Successfully')
    } catch (error) {
        return res.send(error.message)
    }
}
const getplans=async(req,res)=>{
    try {
        const data=await Plan.find()
        if(data.length<=0) return res.send('No Plans')
        return res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}

export {addplan ,getplans}