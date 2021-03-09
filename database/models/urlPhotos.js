const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Photo extends Model { }
Photo.init({
    id_photo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    urlPhoto_contact: {
        type: DataTypes.STRING,
        defaultValue: 'https://imageprofileproject.s3.amazonaws.com/fotopredeterminada.png'
    }
}, {
    sequelize,
    tableName: 'photos'
})

module.exports = Photo