const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
})

userSchema.pre('save', function(next){
    const salt = bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
})


module.exports = mongoose.model('user', userSchema)