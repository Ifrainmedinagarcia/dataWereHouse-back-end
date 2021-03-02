const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Channel extends Model { }

Channel.init({
    id_channel_comunication: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_channel: {
        type: DataTypes.STRING,
        unique: true
    }

}, {
    sequelize,
    tableName: 'channels'
})

module.exports = Channel