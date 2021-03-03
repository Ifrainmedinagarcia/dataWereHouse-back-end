const express = require('express')
const Company = require('../database/models/Company')
const validateInput = require('../libs/validateInputs.libs').schemaInputCompany


const createCompany = async (req, res) => {
    const { name_company, id_region, id_country, address, id_city } = req.body

    const { error } = validateInput.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        await Company.create({
            name_company,
            id_region,
            id_country,
            address,
            id_city
        }).then(company => {
            res.status(201).json({
                message: 'Compañía creada',
                data: company
            })
        })
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                message: 'Companía ya registrada',
                error
        })
        } else {
            res.status(500).json({
                message: 'Error inesperado del servidor',
                error
            })
        }
    }
}

const getCompany = async (req, res) => {
    try {
        await Company.findAll().then(company => {
            res.status(200).json({
                data: company
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getCompanyById = async (req, res) => {
    try {
        await Company.findByPk(req.params.id).then(company => {
            if (company !== null) {
                res.status(200).json({
                    data: company
                })
            } else {
                res.status(404).json({
                    message: 'Esta compañía no ha sido resgistrada'
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const updateCompanyById = async (req, res) => {
    const { name_company, id_region, id_country, address } = req.body

    try {
        await Company.update({
            name_company,
            id_region,
            id_country,
            address
        }, {
            where: {
                id_company: req.params.id
            }
        }).then(company => {
            if (company !== null) {
                res.status(200).json({
                    message: 'Compañía actualizada',
                    data: company
                })

            } else {
                res.status(404).json({
                    message: 'Esta compañía no ha sido resgistrada'
                })
            }

        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const deleteCompanyById = async (req, res) =>{
    try {
        await Company.destroy({
            where:{
                id_company: req.params.id
            }
        }).then(company =>{
            res.status(200).json({
                message: 'Compañía eliminada correctamente'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}


exports.createCompany = createCompany
exports.getCompany = getCompany
exports.getCompanyById = getCompanyById
exports.updateCompanyById = updateCompanyById
exports.deleteCompanyById = deleteCompanyById