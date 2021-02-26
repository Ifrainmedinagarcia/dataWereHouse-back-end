const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Region = require('./Region')
const Country =require('./Country')

class Company extends Model { }

Company.init({
    id_company: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_company: {
        type: DataTypes.STRING
    },
    id_region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id_region'
        }
    },
    id_country: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id_country'
        }
    },
    direction: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    tableName: 'companies'
})

module.exports = Company