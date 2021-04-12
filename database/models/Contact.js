const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Contact extends Model { }

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_contact: {
        type: DataTypes.STRING
    },
    profileImageDefault: {
        type: DataTypes.STRING,
        defaultValue: 'https://imageprofileproject.s3.amazonaws.com/fotopredeterminada.png'
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