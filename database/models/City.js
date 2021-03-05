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
 
}, {
    sequelize,
    tableName: 'cities'
})

module.exports = City