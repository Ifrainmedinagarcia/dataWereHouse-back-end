const express = require('express')
const jwt = require('jsonwebtoken')
const Channel = require('../database/models/Channel')
require('../database/associations')


const getChannel = async (req, res) => {
    const token = req.header('Authorization')
    const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    try {
        await Channel.findAll().then(channel => {
            res.status(200).json({
                data: channel
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

exports.getChannel = getChannel
