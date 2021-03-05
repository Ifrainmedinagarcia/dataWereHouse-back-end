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
    name_country: {
        type: DataTypes.STRING,
        unique: true
    },
}, {
    sequelize,
    tableName: 'countries'
})

module.exports = Country