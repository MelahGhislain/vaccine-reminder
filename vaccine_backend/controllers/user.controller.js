const User = require('../models/user.model')

module.exports.createUser = async(req, res, next)=>{
    try{
        const user = await User.create(req.body)
        res.status(201).json({status: "success", data: user})
    }catch(err){
        next({status: "failed", msg: "Could not create user", err})
    }
}

module.exports.getUsers = async(req, res, next)=>{
    try{
        const users = await User.find({})
        res.status(200).json({status: "success", data: users})
    }catch(err){
        next({status: "failed", msg: "Could not get users", err})
    }
}

module.exports.getUser = async(req, res, next)=>{
    const id = req.params.id
    try{
        const user = await User.findById(id)
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
