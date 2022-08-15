const userModel=require('../models/userModel');
const jwt=require('jsonwebtoken');
const JWT_KEY = require("../secrets");

module.exports.isAuthenticated=async function isAuthenticated(req,res,next){
    try{
       const {token}=req.cookies;
       if(!token){
        res.status(400).json({
            message:'Please login to access to this resource',
            success:false
        })
       }
       const decoded=jwt.verify(token,JWT_KEY);
       const user=await userModel.findById(decoded._id);
       req.user=user;
       next();
    }
    catch(err){
        res.status(400).json({
            message:err.message,
            success:false
        })
    }
}