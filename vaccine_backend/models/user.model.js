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
        type: Number,
        required: true,
        unique: true,
        min: 9, 
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        required: true,
    },
    children:[String]
}, {timestamps: true})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
})


module.exports = mongoose.model('user', userSchema)