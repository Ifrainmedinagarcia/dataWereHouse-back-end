const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Region extends Model { }

Region.init({
    id_region: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_region: {
        type: DataTypes.STRING
    },
    
}, {
    sequelize,
    tableName: 'regions'
})

module.exports = Region