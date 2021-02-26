const sequelize = require('../database/db')
const validateRegister = require('../libs/validateInputs.libs').schemaRegister
const validateLogin = require('../libs/validateInputs.libs').schemaLogin
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../database/models/User')
require('dotenv').config()

const singIn = async (req, res) => {
    const { error } = validateLogin.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }
    try {
        let user = await User.findAll({
            where:{
                email_user: req.body.email_user
            }
        })

        user = user[0]

        if (!user) {
            return res.status(400).json({ error: 'Usuario y/o contraseña inválida' })
        }

        await bcrypt.compare(req.body.password_user, user.password_user, (err, response) => {
            if (err) {
                return response.status(400)
            }

            if (response) {
                const token = jwt.sign({
                    name_user: user.name_user,
                    id_user: user.id_user,
                    id_role: user.id_role
                }, process.env.TOKEN_SECRET, {
                    expiresIn: process.env.EXPIRES
                })
                res.status(200).header('Authorization', token).json({
                    error: null,
                    data: `Bienvenido ${user.name_user}`,
                    token
                })
            } else {
                return res.status(400).json({ error: 'Usuario y/o contraseña inválida' })
            }
        })

    } catch (error) {
        res.status(500).json({
            error,
            message: 'Error inesperado'
        })

    }
}

const singUp = async (req, res) => {
    const { name_user, lastname_user, password_user, email_user, id_role } = req.body

    const { error } = validateRegister.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password_user, salt)

    try {
        User.create({
            name_user,
            lastname_user,
            password_user: passwordHash,
            email_user,
            id_role
        }).then(user => {
            res.status(201).json({
                message: 'usuario creado',
                data: user
            })
        })
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                error,
                message: 'Usuario ya existe'
            })
        } else {
            res.status(500).json({
                error,
                message: 'Error inesperado'
            })
        }
    }
}

exports.singIn = singIn
exports.singUp = singUp