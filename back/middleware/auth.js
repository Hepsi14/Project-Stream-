import jwt from 'jsonwebtoken'

function auth(req,res,next){
    const token=req.header('x-auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try {
        const decoded=jwt.verify(token,''+process.env.SECRETKEY)
        req.user=decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token'+error.message)
    }
}

export default auth