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

const getUsers = async (req, res) => {
    try {
        await User.findAll().then(user => {
            res.status(200).json({
                data: user
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const getUsersById = async (req, res) => {
    try {
        await User.findByPk(req.params.id).then(user => {
            res.status(200).json({
                data: user
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const updateUsersById = async (req, res) => {
    const { id_role } = req.body
    try {
        await User.update({
            id_role
        }, {
            where: {
                id_user: req.params.id
            }
        }).then(user => {
            res.status(200).json({
                message: 'Usuario Actualizado'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        User.destroy({
            where: {
                id_user: req.params.id
            }
        }).then(user => {
            res.status(200).json({
                message: 'Usuario eliminado correctamente'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error inesperado del servidor',
            error
        })
    }
}


exports.createUser = createUser
exports.getUsers = getUsers
exports.getUsersById = getUsersById
exports.updateUsersById = updateUsersById
exports.deleteUserById = deleteUserById