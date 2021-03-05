const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Country extends Model { }

Country.init({
    id_country: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_country: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'countries'
})

module.exports = Country