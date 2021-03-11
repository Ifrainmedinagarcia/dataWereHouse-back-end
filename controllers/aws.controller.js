const multer = require('multer')
const path = require('path')
const AWS = require('aws-sdk')
require('dotenv').config()
const uui = require('uuid').v4
const Photo = require('../database/models/urlPhotos')

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
})

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    },
    limits: { fileSize: 2000000 }
}).single("file")

const uploadImage = async (req, res) => {

    const myFile = req.file.originalname.split('.')
    const fileType = myFile[myFile.length - 1]

    const params = {
        Bucket: process.env.BUCKET,
        Key: `${uui()}.${fileType}`,
        Body: req.file.buffer
    }

    s3.upload(params, (error, data) => {
        if (error) {
            return res.status(500).json({
                message: 'error al subir imagen',
                error
            })
        }
        try {
            Photo.create({
                urlPhoto_contact: data.Location
            }).then(photo => {
                res.status(200).json({
                    message: 'Imagen subida con éxito',
                    data: photo
                })
            })
        } catch (error) {
            return res.status(500).json({
                message: 'error al subir imagen',
                error
            })
        }
    })
}

exports.upload = upload

exports.uploadImage = uploadImage