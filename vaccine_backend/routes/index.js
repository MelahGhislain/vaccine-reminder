const router = require('express').Router()
const userRoutes = require('./user.routes')
const childRoutes = require('./child.routes')

module.exports = () =>{

    router.use("/user" ,userRoutes())
    router.use("/parent" ,childRoutes())

    return router
}
