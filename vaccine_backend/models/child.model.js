const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true
    },
    last_name: {
        type: String,
        required: true,
        unique: true,
    },
    dob:{
        type: String,
        required: true,
        unique: true,
    },
    parent:{
        type: String,
        required: true,
    }
}, {timestamps: true})



module.exports = mongoose.model('user', childSchema)