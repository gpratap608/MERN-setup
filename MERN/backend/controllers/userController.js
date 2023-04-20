import User from "../models/usersModel.js";
import asyncHandler from "express-async-handler";

export const getUsers = asyncHandler(async(req,res)=>{
    const users = await User.find({})
    res.json(users)
})

export const getUsersById = asyncHandler(async(req,res)=>{
    const users  = await User.findById(req.params.id)

    if(users){
        res.json(users)
    }else{
        res.status(404).json({message:"User Not Found"})
        res.status(404)
        throw new Error('User not find')
    }
})