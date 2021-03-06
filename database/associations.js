const Channel = require('./models/Channel')
const City = require('./models/City')
const Commitment = require('./models/Commitment')
const Company = require('./models/Company')
const Contact = require('./models/Contact')
const Country = require('./models/Country')
const Region = require('./models/Region')
const User = require('./models/User')


//uno a uno
//añade el id a user dentro del pareste BORRAR LUEGO

Company.hasOne(Contact, { as: 'Contact', foreignKey: 'id_company' })

Region.hasOne(Contact, { as: 'Contact', foreignKey: 'id_region' })

Country.hasOne(Contact, { as: 'Contact', foreignKey: 'id_country' })

City.hasOne(Contact, { as: 'Contact', foreignKey: 'id_city' })



Commitment.hasOne(Contact, { as: 'Contact', foreignKey: 'id_commitment' })



//uno a muchos

Region.hasMany(Country, { as: 'Paises', foreignKey: 'id_region' })

Channel.hasMany(Contact, { as: 'Contact', foreignKey: 'id_channel_comunication' })

User.hasMany(Region, { as: 'User', foreignKey: 'id_user' })

User.hasMany(Country, { as: 'Pais', foreignKey: 'id_user' })

User.hasMany(Company, { as: 'Company', foreignKey: 'id_user' })

Country.hasMany(City, { as: 'City', foreignKey: 'id_country' })

Country.hasMany(Company, { as: 'Pais', foreignKey: 'id_country' })

Company.belongsTo(Country, { as: 'Country', foreignKey: 'id_country' })

User.hasMany(City, { as: 'Ciudad', foreignKey: 'id_user' })

User.hasMany(Contact, { as: 'Contactos', foreignKey: 'id_user' })