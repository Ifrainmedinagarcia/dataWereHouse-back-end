const sequelize = require('../database/db')
const bcrypt = require('bcrypt')
const User = require('../database/models/User')
const validateRegister = require('../libs/validateInputs.libs').schemaRegister

const createUser = async (req, res) => {
    const { name_user, lastname_user, password_user, email_user, id_role } = req.body

    const { error } = validateRegister.validate(req.body)
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password_user, salt)

    try {
        await User.create({
            name_user,
            lastname_user,
            password_user: hashPassword,
            email_user,
            id_role
        }).then(user => {
            res.status(201).json({
                message: 'Usuario creado con éxito',
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
                message: 'Error inesperado del servidor',
                error
            })
        }
    }
}

const getUser = async (req, res) => {
    try {
        await User.findAll().then(user => {
            res(200).json({
                data: user
            })
        })
    } catch (error) {
        res(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}



const updateUser = async (req, res) => {

}



const deleteUser = async (req, res) => {

}