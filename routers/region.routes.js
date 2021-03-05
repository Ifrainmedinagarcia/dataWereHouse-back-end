const verifyToken = require('../middleware/validate.token')
const regionControllers = require('../controllers/region.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, regionControllers.createRegion)

router.get('/', verifyToken.verifyToken, regionControllers.getRegion)

router.get('/:id', verifyToken.verifyToken, regionControllers.getRegionbyId)

router.put('/:id', verifyToken.verifyToken, regionControllers.updateRegionbyId)

router.delete('/:id', verifyToken.verifyToken, regionControllers.deleteRegionbyId)


module.exports = router
