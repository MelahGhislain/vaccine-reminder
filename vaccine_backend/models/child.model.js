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
    age:{
        type: String,
    },
    gender:{
        type: String,
        required: true,
    },
    parent:{
        type: String,
        required: true,
    }
}, {timestamps: true})



module.exports = mongoose.model('child', childSchema)