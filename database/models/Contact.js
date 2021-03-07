const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')
const Company = require('./Company')
const Region = require('./Region')
const Country = require('./Country')
const City = require('./City')
const Commitment = require('./Commitment')
const Channel = require('./Channel')

class Contact extends Model { }

Contact.init({
    id_contact: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_contact: {
        type: DataTypes.STRING
    },
    lastname_contact: {
        type: DataTypes.STRING
    },
    email_contact: {
        type: DataTypes.STRING,
        unique: true
    },
    position: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    contact_account: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'contacts'
})

module.exports = Contact    