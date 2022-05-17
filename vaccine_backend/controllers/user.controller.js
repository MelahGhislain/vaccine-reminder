const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const Tokens = require('../models/tokens')
const createToken = require('../utils/create_token')
const jwt = require('jsonwebtoken')


module.exports.createUser = async(req, res, next)=>{
    try{
        const isUser = await User.findOne({name: req.body.name})
        if(isUser) return next({status: "failed", msg: "User already exist"})
        const user = await User.create(req.body)
        res.status(201).json({status: "success", data: user})
    }catch(err){
        next({status: "failed", msg: "Could not create user", err})
    }
}

module.exports.getUsers = async(req, res, next)=>{
    try{
        const users = await User.find({}).select("-password")
        res.status(200).json({status: "success", data: users})
    }catch(err){
        next({status: "failed", msg: "Could not get users", err})
    }
}

module.exports.getUser = async(req, res, next)=>{
    const id = req.params.id
    try{
        const isUser = await User.findById(id)
        if(isUser === null) return next({status: "failed", msg: "User not found exist"})
        const user = await User.findById(id).select("-password")
        res.status(200).json({status: "success", data: user})
    }catch(err){
        next({status: "failed", msg: "Could not get user", err})
    }
}

module.exports.updateUser = async(req, res, next)=>{
    const id = req.params.id
    try{
        const user = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", data: user})
    }catch(err){
        next({status: "failed", msg: "Could not update user", err})
    }
}

module.exports.deleteUser = async(req, res, next)=>{
    const id = req.params.id
    try{
        const user = await User.findByIdAndRemove(id)
        res.status(200).json({status: "success", data: user})
    }catch(err){
        next({status: "failed", msg: "Could not delete user", err})
    }
}

module.exports.login = async(req, res, next)=>{
// verify if user is login
    try{
        const user = await User.findOne({name: req.body.name})
        if(!user) return res.status(404).json({status: "failed", msg: "User not found"})
        const isPassword = bcrypt.compare(req.body.password, user.password)
        if(!isPassword) return res.status(404).json({status: "failed", msg: "Invalid password"})

        const accessToken = createToken({id: user._id, isAdmin: user.isAdmin}, process.env.ACCESS_KEY_SECRET, '3h')
        const refreshToken = createToken({id: user._id, isAdmin: user.isAdmin}, process.env.REFRESH_KEY_SECRET, '3d')
        const tokens = await Tokens.find({})
        tokens.refreshToken.push(refreshToken)
        tokens.save()

        res.status(200).json({status: "success", data: {...user, accessToken, refreshToken}})

    }catch(err){
        next({status: "failed", msg: "Could not login user", err})
    }
}


module.exports.refresh = async(req, res, next)=>{
    const user = req.user
    try{
       const refreshToken = req.body.token
       if(!refreshToken) return res.status(403).json({status: "failed", msg: "You are not authenticated"})
       const tokens = await Tokens.find({})
        if(!tokens.refreshToken.includes(refreshToken)) return res.status(403).json({status: "failed", msg: "Invalid refresh token"})
       jwt.verify({id: user._id, isAdmin: user.isAdmin}, process.env.REFRESH_KEY_SECRET, (err, user)=>{
           err && console.log(err)
        //    delete old token and create new access and refresh tokens
       })
   
    }catch(err){
        next({status: "failed", msg: "Could not login user", err})
    }
}