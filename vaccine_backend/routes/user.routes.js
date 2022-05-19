const router = require('express').Router()
const userController = require('../controllers/user.controller')
const isAuthenticated = require('../auth')


module.exports = () =>{
    router.post('/register', userController.createUser)
    router.post('/login', userController.login)
    router.get('/logout',  isAuthenticated, userController.logout)



    router.get('/', userController.getUsers)
    router.get('/:id', userController.getUser)
    router.put('/:id/update', userController.updateUser)
    router.delete('/:id/delete', userController.deleteUser)

    return router
}