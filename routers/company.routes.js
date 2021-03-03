const verifyToken = require('../middleware/validate.token')
const companyController = require('../controllers/company.controller')
const express = require('express')
const router = express.Router()

router.post('/', verifyToken.verifyToken, companyController.createCompany)

router.get('/', verifyToken.verifyToken, companyController.getCompany)

router.get('/:id', verifyToken.verifyToken, companyController.getCompanyById)

router.put('/:id', verifyToken.verifyToken, companyController.updateCompanyById)

router.delete('/:id', [verifyToken.verifyToken, verifyToken.isAdmin], companyController.deleteCompanyById)


module.exports = router
