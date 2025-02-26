import { foodModel } from "../models/foodmodel.js";
import fs from 'fs'

// adds food Item to the database
const addFood = async(req,res,next)=>{
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded." });
    }
    const image_name = `${req.file.filename}`;
    try{
        const addedFood = await foodModel.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_name
        })
        console.log(addedFood)
        res.json({success:true,message:'Food added'})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:'Error'})

    }

    next();
}



// gives a list of foods from the database
const listFood = async(req,res,next)=>{
    try{
        const listedFoods = await foodModel.find();
        res.status(200).json({success:true,data:listedFoods})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false, message:'Error occured'})
    }
    next();
}


// deletes a food on the database
const removeFood = async(req,res,next)=>{
    try{
        // const deletedItem = await foodModel.deleteOne(
        //     {name: req.body.name}
        // )
        // console.log(deletedItem)
        const foodItem = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${foodItem.image}`,(err)=>{
            console.log(err)
        })
        await foodModel.findByIdAndDelete(req.body.id)
        res.status(200).json({success:true,message:"Food removed"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({success:false,message:'Error occured'})
    }
    next()
}

export {addFood,listFood,removeFood};
