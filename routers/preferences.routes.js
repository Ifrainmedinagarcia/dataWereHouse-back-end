const verifyToken = require('../middleware/validate.token')
const preferenceController = require('../controllers/preference.controller')
const express = require('express')
const router = express.Router()


router.get('/', verifyToken.verifyToken, preferenceController.getPreference)

module.exports = router
