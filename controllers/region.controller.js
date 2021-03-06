const express = require('express')
const Region = require('../database/models/Region')
const validateInput = require('../libs/validateInputs.libs').schemaInputRegion
const Country = require('../database/models/Country')
const User = require('../database/models/User')
const City = require('../database/models/City')
const jwt = require('jsonwebtoken')
require('../database/associations')


const createRegion = async (req, res) => {
    const { name_region, id_user } = req.body

    const { error } = validateInput.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        await Region.create({
            name_region,
            id_user
        }).then(region => {
            res.status(201).json({
                message: 'Región Creada',
                data: region
            })
        })
    } catch (error) {
        if (error.name = 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                message: 'Región ya ingresada',
                error
            })
        } else {
            res.status(500).json({
                message: 'Error inesperado del servidor'
            })
        }
    }
}

const getRegion = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Region.findAll({
            include: [{
                model: Country,
                as: 'Paises',
                include: [{
                    model: City,
                    as: 'City'
                }]
            }],
            where: {
                id_user: verify.id_user
            }

        }).then(region => {
            res.status(200).json({
                data: region
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }

}

const getRegionbyId = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Region.findByPk(req.params.id, {
            include: [{
                model: Country,
                as: 'Paises',
                include: [{
                    model: City,
                    as: 'City'
                }]
            }],
            where: {
                id_user: verify.id_user
            }
        }).then(region => {
            if (region !== null) {
                res.status(200).json({
                    data: region
                })
            } else {
                res.status(404).json({
                    message: 'Esta Región no ha sido registrada'
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

const updateRegionbyId = async (req, res) => {
    const { name_region } = req.body

    try {
        await Region.update({
            name_region
        }, {
            where: {
                id_region: req.params.id
            }
        }).then(region => {
            res.status(200).json({
                message: 'Región Actualizada'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const deleteRegionbyId = async (req, res) => {
    try {
        await Region.destroy({
            where: {
                id_region: req.params.id
            }
        }).then(region => {
            res.status(200).json({
                message: 'Región eliminada'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }

}


exports.createRegion = createRegion
exports.getRegion = getRegion
exports.getRegionbyId = getRegionbyId
exports.updateRegionbyId = updateRegionbyId
exports.deleteRegionbyId = deleteRegionbyId
