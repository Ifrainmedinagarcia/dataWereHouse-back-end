const verifyToken = require('../middleware/validate.token')
const cityController = require('../controllers/city.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, cityController.createCity)

router.get('/', verifyToken.verifyToken, cityController.getCity)

router.get('/:id', verifyToken.verifyToken, cityController.getCityById)

router.put('/:id', verifyToken.verifyToken, cityController.updateCityById)

router.delete('/:id', verifyToken.verifyToken, cityController.deleteCitybyId)


module.exports = router
