const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Region = require('./Region')
const Country =require('./Country')
const City = require('./City')

class Company extends Model { }

Company.init({
    id_company: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_company: {
        type: DataTypes.STRING,
        unique: true
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
    id_city: {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id_city'
        }
    },
    address: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    tableName: 'companies'
})

module.exports = Company