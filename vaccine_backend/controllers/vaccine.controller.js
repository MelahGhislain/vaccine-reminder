const Vaccine = require('../models/vaccine.model')


module.exports.createVaccine = async(req, res, next)=>{
    try{
        const isVaccine = await Vaccine.findOne({name: req.body.name})
        
        if(isVaccine) return next({status: "failed", msg: "Vaccine already exist"})
        
        const vaccine = await Vaccine.create({...req.body}) 

        res.status(201).json({status: "success", data: vaccine})
    }catch(err){
        next({status: "failed", msg: "Could not create vaccine", err})
    }
}

module.exports.getVaccines = async(req, res, next)=>{
    try{
        const vaccines = await Vaccine.find({})
        res.status(200).json({status: "success", data: vaccines})
    }catch(err){
        next({status: "failed", msg: "Could not get vaccines", err})
    }
}

module.exports.getVaccine = async(req, res, next)=>{
    const {id} = req.params
    try{
        const vaccine = await Vaccine.findById(id)
        res.status(200).json({status: "success", data: vaccine})
    }catch(err){
        next({status: "failed", msg: "Could not get vaccine", err})
    }
}

module.exports.updateVaccine = async(req, res, next)=>{
    const {id} = req.params
    try{
        const vaccine = await Vaccine.findByIdAndUpdate(id, {$set: {...req.body}}, {new: true})
        res.status(200).json({status: "success", data: vaccine})
    }catch(err){
        next({status: "failed", msg: "Could not update vaccine", err})
    }
}

module.exports.deleteVaccine = async(req, res, next)=>{
    try{
        const {id} = req.params

        const vaccine = await Vaccine.findByIdAndRemove(id)

        res.status(200).json({status: "success", data: vaccine})
    }catch(err){
        next({status: "failed", msg: "Could not delete vaccine", err})
    }
}