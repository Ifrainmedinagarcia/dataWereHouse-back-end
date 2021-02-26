const Joi = require('@hapi/joi')
const schemaRegister = Joi.object({
    name_user: Joi.string().min(6).max(255).required(),
    lastname_user: Joi.string().min(6).max(255).required(),
    email_user: Joi.string().min(6).max(255).required().email(),
    password_user: Joi.string().min(6).max(1024).required(),
    id_role: Joi.number()
})

const schemaLogin = Joi.object({
    email_user: Joi.string().min(6).max(255).required().email(),
    password_user: Joi.string().min(6).max(1024).required(),
})


exports.schemaRegister = schemaRegister
exports.schemaLogin = schemaLogin