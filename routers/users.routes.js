const verifyToken = require('../middleware/validate.token')
const userControllers = require('../controllers/user.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, userControllers.createUser)

router.get('/', verifyToken.verifyToken, userControllers.getUsers)

router.get('/:id', verifyToken.verifyToken, userControllers.getUsersById)

router.put('/:id', verifyToken.verifyToken, userControllers.updateUsersById)

router.delete('/:id', verifyToken.verifyToken, userControllers.deleteUserById)


module.exports = router
