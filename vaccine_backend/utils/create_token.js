const jwt = require('jsonwebtoken')

const createToken=(data, key, duration)=>{
   return jwt.sign(data, key, {expiresIn: duration})
}

module.exports = createToken