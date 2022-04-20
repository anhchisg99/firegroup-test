const express = require('express')
const router = express.Router()
const User = require('../models/user.model.js')
const bodyParser = require('body-parser')
// const bcrypt = require("bcrypt")
// const jwt = require('jsonwebtoken')




router.get('/conga',(req,res)=>{
    res.send({status:"con ga be be"})
})

router.post('/create',async (req,res)=>{
    const order = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
    })
    try {
        const savedInvoice = await order.save();
        // res.json(savedInvoice)
        res.json({status:"success"})
    } catch (error) {
        res.json({mess:error})
    }
})
router.post('/login',async (req,res)=>{
    try{
        const savedAdmin = await User.findOne({username:req.body.username});
        const match = await bcrypt.compare(req.body.password,savedAdmin.password);
        if(match){
            const accessToken =  await jwt.sign({user:savedAdmin.username},process.env.ACCESS_TOKEN_SECRET)
            res.json({accessToken:accessToken})
        }    
    }catch(err){
        res.json(err)
    }
})
module.exports = router