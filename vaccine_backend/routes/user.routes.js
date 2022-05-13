const router = require('express').Router()
const userController = require('../controllers/user.controller')


module.exports = () =>{
    router.post('/', userController.createUser)
    router.get('/', userController.getUsers)
    router.get('/:id', userController.getUser)
    router.put('/:id', userController.updateUser)
    router.delete('/:id', userController.deleteUser)

    return router
}