const verifyToken = require('../middleware/validate.token')
const countryController = require('../controllers/country.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, countryController.createCountry)

router.get('/', verifyToken.verifyToken, countryController.getCountry)

router.get('/:id', verifyToken.verifyToken, countryController.getCountryById)

router.put('/:id', verifyToken.verifyToken, countryController.updateCountryById)

router.delete('/:id', verifyToken.verifyToken, countryController.deleteCountryById)


module.exports = router
