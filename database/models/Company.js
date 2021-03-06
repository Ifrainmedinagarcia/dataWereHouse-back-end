const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Company extends Model { }

Company.init({
    id_company: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_company: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    tableName: 'companies'
})

module.exports = Company