const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Preferences extends Model { }

Preferences.init({
    id_preference: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_preference: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'preferences',
    timestamps: false
})

module.exports = Preferences