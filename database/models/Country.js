const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Region = require('./Region')

class Country extends Model { }

Country.init({
    id_country: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_region: {
        type: DataTypes.STRING
    },
    id_region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id_region'
        }
    }

}, {
    sequelize,
    tableName: 'countries'
})

module.exports = Country