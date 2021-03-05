const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Role extends Model {}
Role.init({
    id_role: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_role: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'roles',
    timestamps: false
})

module.exports = Role