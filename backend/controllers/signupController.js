import userModel from '../models/usermodel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const signup = async(req,res,next)=>{

    try {
        const { username, password, email} = req.body;

        if(!username || !password || !email){
            return res.status(400).json({success:false,message:'username, password and email are required'})
        }

        const exists = await userModel.findOne({email:email})
        if(exists)
            return res.status(409).json({success:false,message : 'The email already exists, please try another'})
        if(!validator.isEmail(email))
            return res.status(400).json({success:false,message : 'Please enter valid email'})

        if(password.length < 8)
            return res.status(400).json({success:false,message : 'Please enter a stronger password'})

        const userPassword = req.body.password;
        const encPassword = await bcrypt.hash(userPassword,10)
        const newUser = await userModel.create({
            "username":username,
            "password":encPassword,
            "email":email
        })
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET)
        console.log(newUser)
        return res.status(201).json({success:true,token:token,message: `Success! New user ${username} created`})

    } catch (error) {
        return res.status(500).json({message: error})        
    }

    next()

}
export { signup }




