const router = require('express').Router()
const userRoutes = require('./user.routes')

module.exports = () =>{

    router.use("/users" ,userRoutes())

    return router
}
