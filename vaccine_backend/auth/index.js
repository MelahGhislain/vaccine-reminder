const jwt = require('jsonwebtoken')


module.exports = async(req, res, next) =>{
    if(!req.headers || !req.headers.authorization) return next({status: "failed", msg: "User is not authenticated"})
    const token = req.headers.authorization.split("Bearer ")[1]
    if(!token) return next({status: "failed", msg: "Invalid token"})
    try{
        const decodedToken = jwt.decode(token, process.env.ACCESS_KEY_SECRET)
        // console.log(decodedToken)
        if(!decodedToken) return next({status: "failed", msg: "Invalid token"})
        
        req.user = decodedToken
        next()
    }catch(err){
        return next({err})
    }
}