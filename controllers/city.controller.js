const express = require('express')
const City = require('../database/models/City')
const Country = require('../database/models/Country')
const validateInput = require('../libs/validateInputs.libs').schemaInputCity


const createCity = async (req, res) => {
    const { name_city, id_country } = req.body
    const { error } = validateInput.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        await City.create({
            name_city,
            id_country
        }).then(city => {
            res.status(201).json({
                message: 'Ciudad creada',
                data: city
            })
        })
    } catch (error) {
        if (error.name = 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                message: 'Ciudad ya ingresada',
                error
            })
        } else {
            res.status(500).json({
                message: 'Error inesperado del servidor'
            })

        }
    }
}

const getCity = async (req, res) => {
    try {
        await City.findAll().then(city => {
            res.status(200).json({
                data: city
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getCityById = async (req, res) => {
    try {
        await City.findByPk(req.params.id).then(city => {
            if (city !== null) {
                res.status(200).json({
                    data: city
                })
            } else {
                res.status(404).json({
                    message: 'Esta ciudad no ha sido registrada'
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

const updateCityById = async (req, res) => {
    const { name_city } = req.body

    try {
        await City.update({
            name_city
        }, {
            where: {
                id_city: req.params.id
            }
        }).then(city => {
            res.status(200).json({
                message: 'País Actualizado'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }

}

const deleteCitybyId = async (req, res) => {
    try {
        await City.destroy({
            where: {
                id_city: req.params.id
            }
        }).then(city => {
            res.status(200).json({
                message: 'País eliminado'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

exports.createCity = createCity
exports.getCity = getCity
exports.getCityById = getCityById
exports.updateCityById = updateCityById
exports.deleteCitybyId = deleteCitybyId