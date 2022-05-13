const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    refreshToken: [String]
})

module.exports = mongoose.model('token', tokenSchema)