const router = require('express').Router()
const childController = require('../controllers/child.controller')


module.exports = () =>{
    router.post('/:parentId/child/create', childController.createChild)
    router.get('/:parentId/child/', childController.getChildren)
    router.get('/:parentId/child/:id', childController.getChild)
    router.put('/:parentId/child/:id/update', childController.updateChild)
    router.delete('/:parentId/child/:id/delete', childController.deleteChild)

    return router
}