const express=require("express")
const router=express.Router();



router.get("/login",(req,res)=>{

res.json({name:"lovesh"})


})


module.exports=router