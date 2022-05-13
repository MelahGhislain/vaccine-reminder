const Child = require('../models/child.model')
const User = require('../models/user.model')


module.exports.createChild = async(req, res, next)=>{
    try{
        const parentId = req.user.id
        const isChild = await Child.findOne({first_name: req.body.first_name, last_name: req.body.last_name})
        
        if(isChild) return next({status: "failed", msg: "Child already exist"})
        
        const child = await Child.create({...req.body, parent: parentId}) 

        await User.findByIdAndUpdate(parentId, {$addToSet: {children: child._id}})

        res.status(201).json({status: "success", data: child})
    }catch(err){
        next({status: "failed", msg: "Could not create child", err})
    }
}

module.exports.getChildren = async(req, res, next)=>{
    const parentId = req.user.id
    try{
        const children = await Child.find({parent: parentId})
        res.status(200).json({status: "success", data: children})
    }catch(err){
        next({status: "failed", msg: "Could not get childs", err})
    }
}

module.exports.getChild = async(req, res, next)=>{
    const {id} = req.params
    try{
        const child = await Child.findById(id)
        res.status(200).json({status: "success", data: child})
    }catch(err){
        next({status: "failed", msg: "Could not get child", err})
    }
}

module.exports.updateChild = async(req, res, next)=>{
    const {id} = req.params
    try{
        const child = await Child.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json({status: "success", data: child})
    }catch(err){
        next({status: "failed", msg: "Could not update child", err})
    }
}

module.exports.deleteChild = async(req, res, next)=>{
    try{
        const {id} = req.params
        const parentId = req.user.id

        const child = await Child.findByIdAndRemove(id)

        await User.findByIdAndRemove(parentId, {$addToSet: {children: id}})
        res.status(200).json({status: "success", data: child})
    }catch(err){
        next({status: "failed", msg: "Could not delete child", err})
    }
}