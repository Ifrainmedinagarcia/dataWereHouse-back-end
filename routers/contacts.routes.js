const verifyToken = require('../middleware/validate.token')
const contactsController = require('../controllers//contacts.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, contactsController.createContact)

router.get('/', verifyToken.verifyToken, contactsController.getContacts)

router.get('/:id', verifyToken.verifyToken, contactsController.getContactById)

router.put('/:id', verifyToken.verifyToken, contactsController.updateContactById)

router.delete('/:id', verifyToken.verifyToken, contactsController.deleteContactById)


module.exports = router
