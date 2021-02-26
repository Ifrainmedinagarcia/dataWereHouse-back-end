const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Region = require('./Region')

class Commitment extends Model { }

Commitment.init({
    id_commitment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value_commitment: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'commitments'
})

module.exports = Commitment