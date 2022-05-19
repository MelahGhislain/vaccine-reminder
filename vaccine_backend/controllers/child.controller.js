const moment = require('moment')
const Child = require('../models/child.model')
const User = require('../models/user.model')
const Vaccine = require('../models/vaccine.model')

module.exports.createChild = async(req, res, next)=>{
    try{
        const weeks = moment().diff(req.body.dob, 'weeks', false)  
        // console.log(weeks)
        const parentId = req.user.id
        const isChild = await Child.findOne({first_name: req.body.first_name, last_name: req.body.last_name})
        // console.log(isChild)
        if(isChild) return next({status: "failed", msg: "Child already exist"})
        
        // Populate the child's vaccines 
        const vaccines = await Vaccine.find({})
        let totalVaccines = []
        vaccines.forEach(vaccine =>{
            if(weeks <= vaccine.age){
                totalVaccines.push(vaccine._id)
            }
        })
        
        const child = await Child.create({...req.body, parent: parentId, age: weeks, vaccines: totalVaccines}) 
        
        await User.findByIdAndUpdate(parentId, {$addToSet: {children: child._id}})
       
        res.status(201).json({status: "success", data: child})
    }catch(err){
        next({status: "failed", msg: "Could not create child", err})
    }
}

module.exports.getChildren = async(req, res, next)=>{
    try{
        const parentId = req.user.id
        const children = await Child.find({parent: parentId})
        let childrenData = []
        for(i=0; i < children.length; i++){
            const child = children[i]
            
            const vaccineData = []
            for(j=0; j< child.vaccines.length; j++){
                const vaccine = child.vaccines[j]
                
                const doc = await Vaccine.findById(vaccine)
                vaccineData.push(doc._doc)
            }
            childrenData.push({...child._doc, vaccines: [...vaccineData]})
        }
        res.status(200).json({status: "success", data: childrenData})
    }catch(err){
        next({status: "failed", msg: "Could not get children", err})
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