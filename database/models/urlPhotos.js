const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Photo extends Model { }
Photo.init({
    id_photos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    urlPhoto_contact: {
        type: DataTypes.STRING,
        defaultValue: 'https://imageprofileproject.s3.amazonaws.com/fotopredeterminada.png',
        unique: true
    }
}, {
    sequelize,
    tableName: 'photos'
})

module.exports = Photo