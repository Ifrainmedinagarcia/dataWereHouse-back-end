const Channel = require('./models/Channel')
const City = require('./models/City')
const Commitment = require('./models/Commitment')
const Company = require('./models/Company')
const Contact = require('./models/Contact')
const Country = require('./models/Country')
const Region = require('./models/Region')
const User = require('./models/User')
const Photo = require('../database/models/urlPhotos')


Region.hasMany(Country, { as: 'Paises', foreignKey: 'id_region', onDelete: 'cascade', hooks: true })

User.hasMany(Region, { as: 'User', foreignKey: 'id_user', onDelete: 'cascade', hooks: true })

User.hasMany(Country, { as: 'Pais', foreignKey: 'id_user', onDelete: 'cascade', hooks: true })

User.hasMany(Company, { as: 'Company', foreignKey: 'id_user', onDelete: 'cascade', hooks: true })

Country.hasMany(City, { as: 'City', foreignKey: 'id_country', onDelete: 'cascade', hooks: true })

Country.hasMany(Company, { as: 'Pais', foreignKey: 'id_country', onDelete: 'cascade', hooks: true })

Company.belongsTo(Country, { as: 'Country', foreignKey: 'id_country' })

User.hasMany(City, { as: 'Ciudad', foreignKey: 'id_user' })

User.hasMany(Contact, { as: 'Contactos', foreignKey: 'id_user', onDelete: 'cascade', hooks: true })


Contact.belongsTo(Photo, { as:'Photo', foreignKey: 'id_photos' })


Contact.belongsTo(Company, { foreignKey: 'id_company'})


Contact.belongsTo(Region, { foreignKey: 'id_region', onDelete: 'cascade', hooks: true })


Contact.belongsTo(Country, { foreignKey: 'id_country' })


Contact.belongsTo(City, { foreignKey: 'id_city'})


Contact.belongsTo(Commitment, { foreignKey: 'id_commitment' })

Contact.belongsTo(Channel, { foreignKey: 'id_channel_comunication' })