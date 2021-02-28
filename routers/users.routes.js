const verifyToken = require('../middleware/validate.token')
const userControllers = require('../controllers/user.controller')
const express = require('express')
const router = express.Router()


router.post('/', [verifyToken, verifyToken.isAdmin], userControllers.createUser)

router.get('/', [verifyToken, verifyToken.isAdmin], userControllers.getUsers)

router.get('/:id', [verifyToken, verifyToken.isAdmin], userControllers.getUsersById)

router.put('/:id',[verifyToken, verifyToken.isAdmin], userControllers.updateUsersById)

router.delete('/:id', [verifyToken, verifyToken.isAdmin], userControllers.deleteUserById)


module.exports = router
