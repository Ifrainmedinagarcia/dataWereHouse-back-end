const Joi = require('@hapi/joi')
const schemaRegister = Joi.object({
    name_user: Joi.string().min(6).max(255).required(),
    lastname_user: Joi.string().min(6).max(255).required(),
    email_user: Joi.string().min(6).max(255).required().email(),
    password_user: Joi.string().min(6).max(1024).required(),
    id_role: Joi.number(),
    id_photo: Joi.number()
})

const schemaLogin = Joi.object({
    email_user: Joi.string().min(6).max(255).required().email(),
    password_user: Joi.string().min(6).max(1024).required(),
})

const schemaInputRegion = Joi.object({
    name_region: Joi.string().min(4).max(255).required(),
    id_user: Joi.number()
})

const schemaInputCountry = Joi.object({
    name_country: Joi.string().min(4).max(255).required(),
    id_region: Joi.number(),
    id_user: Joi.number()
})

const schemaInputCity = Joi.object({
    name_city: Joi.string().min(4).max(255).required(),
    id_country: Joi.number(),
    id_user: Joi.number()
})
const schemaInputCompany = Joi.object({
    name_company: Joi.string().min(2).max(255).required(),
    address: Joi.string().min(4).max(255).required(),
    id_country: Joi.number(),
    id_user: Joi.number()
})
const schemaInputContacts = Joi.object({
    name_contact: Joi.string().min(4).max(255).required(),
    lastname_contact: Joi.string().min(4).max(255).required(),
    position: Joi.string().min(4).max(255).required(),
    address: Joi.string().min(4).max(255).required(),
    contact_account: Joi.string().min(4).max(255).required(),
    email_contact: Joi.string().min(6).max(255).required().email(),
    profileImageDefault: Joi.string().min(6).max(1024),
    id_photo: Joi.number(),
    id_preference: Joi.number(),
    id_company: Joi.number(),
    id_region: Joi.number(),
    id_country: Joi.number(),
    id_city: Joi.number(),
    id_channel_comunication: Joi.number(),
    id_commitment: Joi.number(),
    id_user: Joi.number()
})


exports.schemaRegister = schemaRegister
exports.schemaLogin = schemaLogin
exports.schemaInputRegion = schemaInputRegion
exports.schemaInputCountry = schemaInputCountry
exports.schemaInputCity = schemaInputCity
exports.schemaInputContacts = schemaInputContacts
exports.schemaInputCompany = schemaInputCompany