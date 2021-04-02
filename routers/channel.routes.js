const verifyToken = require('../middleware/validate.token')
const channelController = require('../controllers/channel.controller')
const express = require('express')
const router = express.Router()


router.get('/', verifyToken.verifyToken, channelController.getChannel)

module.exports = router
