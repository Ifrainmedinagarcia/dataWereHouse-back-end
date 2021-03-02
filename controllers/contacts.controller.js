const express = require('express')
const Contact = require('../database/models/Contact')
const validateInput = require('../libs/validateInputs.libs').schemaInputContacts

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
        address,
        id_channel_comunication,
        id_commitment,
        contact_account
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