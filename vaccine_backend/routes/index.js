const router = require('express').Router()
const userRoutes = require('./user.routes')
const childRoutes = require('./child.routes')
const vaccineRoutes = require('./vaccine.routes')

module.exports = () =>{

    router.use("/user" ,userRoutes())
    router.use("/child" ,childRoutes())
    router.use("/vaccine" ,vaccineRoutes())

    return router
}
