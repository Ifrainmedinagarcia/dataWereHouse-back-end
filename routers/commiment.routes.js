const verifyToken = require('../middleware/validate.token')
const commimentController = require('../controllers/commiment.controller')
const express = require('express')
const router = express.Router()


router.get('/', verifyToken.verifyToken, commimentController.getCommiment)

module.exports = router
