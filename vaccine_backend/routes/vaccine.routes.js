const router = require('express').Router()
const vaccineController = require('../controllers/vaccine.controller')


module.exports = () =>{
    router.post('/create', vaccineController.createVaccine)
    router.get('/', vaccineController.getVaccines)
    router.get('/:id', vaccineController.getVaccine)
    router.put('/:id/update', vaccineController.updateVaccine)
    router.delete('/:id/delete', vaccineController.deleteVaccine)

    return router
}