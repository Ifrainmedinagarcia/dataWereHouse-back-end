const express = require('express')
const Contact = require('../database/models/Contact')
const Region = require('../database/models/Region')
const Company = require('../database/models/Company')
const Channel = require('../database/models/Channel')
const Commitment = require('../database/models/Commitment')
const Country = require('../database/models/Country')
const validateInput = require('../libs/validateInputs.libs').schemaInputContacts
const jwt = require('jsonwebtoken')
const Photo = require('../database/models/urlPhotos')
require('dotenv').config()

const createContact = async (req, res) => {
    const {
        name_contact,
        lastname_contact,
        email_contact,
        position,
        id_company,
        id_region,
        id_country,
        id_city,
        id_photos,
        address,
        id_channel_comunication,
        id_commitment,
        contact_account,
        id_user
    } = req.body

    const { error } = validateInput.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        await Contact.create({
            name_contact,
            id_photos,
            lastname_contact,
            email_contact,
            position,
            id_company,
            id_region,
            id_country,
            id_city,
            address,
            id_channel_comunication,
            id_commitment,
            contact_account,
            id_user
        }).then(contact => {
            res.status(201).json({
                message: 'Contacto Creado con éxito',
                data: contact
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getContacts = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Contact.findAll({
            include: [{
                model: Region
            }, {
                model: Country
            }, {
                model: Company
            }, {
                model: Channel
            }, {
                model: Commitment
            },{
                model: Photo,
                as:'Photo'
            }],
            where: {
                id_user: verify.id_user
            }
        }).then(contact => {
            res.status(200).json({
                data: contact
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getContactById = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Contact.findByPk(req.params.id, {
            include: [{
                model: Region
            }, {
                model: Country
            }, {
                model: Company
            }, {
                model: Channel
            }, {
                model: Commitment
            }],
            where: {
                id_user: verify.id_user
            }
        }).then(contact => {
            if (contact !== null) {
                res.status(200).json({
                    data: contact
                })

            } else {
                res.status(404).json({
                    message: 'Este contacto no ha sido resgistrado'
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

const updateContactById = async (req, res) => {
    const {
        name_contact,
        lastname_contact,
        email_contact,
        position,
        id_company,
        id_region,
        id_country,
        id_city,
        address,
        id_channel_comunication,
        id_commitment,
        contact_account
    } = req.body
    try {
        await Contact.update({
            name_contact,
            lastname_contact,
            email_contact,
            position,
            id_company,
            id_region,
            id_country,
            id_city,
            address,
            id_channel_comunication,
            id_commitment,
            contact_account
        }, {
            where: {
                id_contact: req.params.id
            }
        }).then(contact => {
            if (contact !== null) {
                res.status(200).json({
                    message: 'Contacto actualizado',
                    data: contact
                })
            } else {
                res.status(404).json({
                    message: 'Esta contacto no ha sido resgistrado'
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

const deleteContactById = async (req, res) => {
    try {
        await Contact.destroy({
            where: {
                id_contact: req.params.id
            }
        }).then(contact => {
            res.status(200).json({
                message: 'Contacto eliminado correctamente'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

exports.createContact = createContact

exports.getContacts = getContacts

exports.getContactById = getContactById

exports.updateContactById = updateContactById

exports.deleteContactById = deleteContactById
