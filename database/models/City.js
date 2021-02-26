const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Country = require('./Country')

class City extends Model { }

City.init({
    id_city: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_city: {
        type: DataTypes.STRING
    },
    id_country: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id_country'
        }
    }

}, {
    sequelize,
    tableName: 'cities'
})

module.exports = City