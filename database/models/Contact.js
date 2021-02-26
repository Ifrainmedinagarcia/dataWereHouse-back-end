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
    lastname_contac: {
        type: DataTypes.STRING
    },
    password_contact: {
        type: DataTypes.STRING
    },
    email_contact: {
        type: DataTypes.STRING,
        unique: true
    },
    date_creation: {
        type: DataTypes.DATE
    },
    position: {
        type: DataTypes.INTEGER
    },
    id_company: {
        type: DataTypes.INTEGER,
        references: {
            model: Company,
            key: 'id_company'
        }
    },
    id_region: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id_region'
        }
    },
    id_country: {
        type: DataTypes.INTEGER,
        references: {
            model: Country,
            key: 'id_country'
        }
    },
    id_city: {
        type: DataTypes.INTEGER,
        references: {
            model: City,
            key: 'id_city'
        }
    },
    direction: {
        type: DataTypes.INTEGER
    },
    id_channel_comunication: {
        type: DataTypes.INTEGER,
        references: {
            model: Channel,
            key: 'id_channel_comunication'
        }
    },
    id_commitment: {
        type: DataTypes.INTEGER,
        references: {
            model: Commitment,
            key: 'id_commitment'
        }
    },
    contact_account: {
        type: DataTypes.STRING
    }

}, {
    sequelize,
    tableName: 'contacts'
})

module.exports = Contact