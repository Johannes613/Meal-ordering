import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const verifyJwt = async(req,resp,next) =>{
    try {
        const userToken = req.headers.token;
        if(!userToken)
            return resp.status(401).json({success:false,message:'Token required'})

        const tokenDecoded = jwt.verify(userToken,process.env.JWT_SECRET)
        req.body.userId = tokenDecoded.id
        next();
    } catch (error) {
        console.log(error)
        resp.status(500).json({success:false,message:'Error occured'})   
    }


}
export default verifyJwt;