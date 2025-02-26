import userModel from "../models/usermodel.js";

// add to cart functionality
const addToCart = async(req,res,next)=>{
    try {
        let foundUser = await userModel.findOne({_id:req.body.userId})
        let cartData = foundUser.cartData;

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData:cartData})
        
        res.status(200).json({success:true,message:'Item added'})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Error occured'})   
    }
    
}

// remove from cart functionality
const removeFromCart = async(req,res,next)=>{
    try {
        let foundUser = await userModel.findOne({_id:req.body.userId})
        let cartData = foundUser.cartData;

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] -= 1
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData:cartData})
        
        res.status(200).json({success:true,message:'Item removed'})
        next()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Error occured'})   
    }

}

// get cart functionality
const getCart = async(req,res,next)=>{
    try {
        const foundUser = await userModel.findOne({_id:req.body.userId})
        console.log(foundUser)
        res.status(200).json({success:true,message:'Items found',Items:foundUser.cartData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Error occured'})   
    }


}
export { addToCart, removeFromCart,getCart }