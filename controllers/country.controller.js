const express = require('express')
const Country = require('../database/models/Country')
const validateInput = require('../libs/validateInputs.libs').schemaInputCountry

const createCountry = async (req, res) => {
    const { name_country, id_region } = req.body

    const { error } = validateInput.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        await Country.create({
            name_country,
            id_region
        }).then(country => {
            res.status(201).json({
                message: 'País Creado',
                data: country
            })
        })
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                message: 'País ya ingresado',
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

const getCountry = async (req, res) => {
    try {
        await Country.findAll().then(country => {
            res.status(200).json({
                data: country
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getCountryById = async (req, res) => {
    try {
        await Country.findByPk(req.params.id).then(country => {
            if (country !== null) {
                res.status(200).json({
                    data: country
                })
            } else {
                res.status(404).json({
                    message: 'Esta País no ha sido registrado'
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

const updateCountryById = async (req, res) => {
    const { name_country } = req.body

    try {
        Country.update({
            name_country
        }, {
            where: {
                id_country: req.params.id
            }
        }).then(country => {
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

const deleteCountryById = async (req, res) => {
    try {
        Country.destroy({
            where: {
                id_country: req.params.id
            }
        }).then(country => {
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

exports.createCountry = createCountry
exports.getCountry = getCountry
exports.getCountryById = getCountryById
exports.updateCountryById = updateCountryById
exports.deleteCountryById = deleteCountryById