const express = require('express')
const jwt = require('jsonwebtoken')
const Preferences = require('../database/models/Preferences')
require('../database/associations')


const getPreference = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Preferences.findAll().then(preference => {
            res.status(200).json({
                data: preference
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

exports.getPreference = getPreference
