const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    decription: {
        type: String,
        required: true,
    },
    for_which_week:{
        type: String,
        required: true,
    },
}, {timestamps: true})



module.exports = mongoose.model('vaccine', childSchema)