const router = require('express').Router()
const childController = require('../controllers/child.controller')
const isAuthenticated = require('../auth')


module.exports = () =>{
    router.post('/create', isAuthenticated, childController.createChild)
    router.get('/', childController.getChildren)
    router.get('/:id', childController.getChild)
    router.put('/:id/update', childController.updateChild)
    router.delete('/:id/delete', childController.deleteChild)

    return router
}