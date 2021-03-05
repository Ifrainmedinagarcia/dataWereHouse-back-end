const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Role = require('./Role')

class User extends Model { }

User.init({
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_user: {
        type: DataTypes.STRING
    },
    lastname_user: {
        type: DataTypes.STRING
    },
    password_user: {
        type: DataTypes.STRING
    },
    email_user: {
        type: DataTypes.STRING,
        unique: true
    },
    id_role: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id_role'
        }
    }
}, {
    sequelize,
    tableName: 'users'
})

module.exports = User