const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: [true, "Date of birth is required"],
    },
    height:{
        type: String,
        required: true,
    },
    weight:{
        type: String,
        required: true,
    },
    blood_group:{
        type: String,
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true,
    },
    parent:{
        type: String,
        required: true,
    },
    vaccines:[String]
    
}, {timestamps: true})



module.exports = mongoose.model('child', childSchema)