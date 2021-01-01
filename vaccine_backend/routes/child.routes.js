const router = require('express').Router()
const childController = require('../controllers/child.controller')
const isAuthenticated = require('../auth')


module.exports = () =>{
    router.post('/create', isAuthenticated, childController.createChild)
    router.get('/', isAuthenticated, childController.getChildren)
    router.get('/:id', isAuthenticated, childController.getChild)
    router.put('/:id/update', isAuthenticated, childController.updateChild)
    router.delete('/:id/delete', isAuthenticated, childController.deleteChild)

    return router
}