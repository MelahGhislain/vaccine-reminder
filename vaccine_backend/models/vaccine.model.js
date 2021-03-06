const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    abbrevation:{
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    route_of_admin: {
        type: String,
        required: true,
    },
    preventable_diseases:[String]
}, {timestamps: true})



module.exports = mongoose.model('vaccine', childSchema)