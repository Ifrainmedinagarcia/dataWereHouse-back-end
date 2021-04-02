const express = require('express')
const jwt = require('jsonwebtoken')
const Commitment = require('../database/models/Commitment')
require('../database/associations')


const getCommiment = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Commitment.findAll().then(commiment => {
            res.status(200).json({
                data: commiment
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

exports.getCommiment = getCommiment
