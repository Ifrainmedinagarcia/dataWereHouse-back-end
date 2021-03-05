const Channel = require('./models/Channel')
const City = require('./models/City')
const Commitment = require('./models/Commitment')
const Company = require('./models/Company')
const Contact = require('./models/Contact')
const Country = require('./models/Country')
const Region = require('./models/Region')


//uno a uno
//añade el id a user dentro del pareste BORRAR LUEGO


Region.hasOne(Country, {as:'Country', foreignKey: 'id_region'})

Country.hasOne(City, {as:'City', foreignKey: 'id_country'})

Company.hasOne(Contact, {as: 'Contact', foreignKey: 'id_company' })

Region.hasOne(Contact, {as: 'Contact', foreignKey: 'id_region'})

Country.hasOne(Contact, {as: 'Contact', foreignKey: 'id_country'})

City.hasOne(Contact, {as:'Contact', foreignKey: 'id_city'})

Channel.hasOne(Contact, {as:'Contact', foreignKey: 'id_channel_comunication'})

Commitment.hasOne(Commitment, {as:'Contact', foreignKey: 'id_commitment'})



//uno a muchos
Region.hasMany(Country, {as: 'Paises', foreignKey: 'id_country'})

Country.hasMany(City, {as: 'Ciudades', foreignKey: 'id_city'})