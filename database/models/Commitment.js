const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

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
    tableName: 'commitments',
    timestamps: false
})

module.exports = Commitment