const express = require('express')
const helmet = require('helmet')
const sequelize = require('./database/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3001
//require Routes
const authRouter = require('./routers/auth.routes')
const usersRouter = require('./routers/users.routes')
const regionsRouter = require('./routers/region.routes')
const countriesRouter = require('./routers/country.routes')
const citiesRouter = require('./routers/city.routes')
const companiesRouter = require('./routers/company.routes')
const contactsRouter = require('./routers/contacts.routes')
const uploadRouter = require('./routers/aws.router')
const channelRouter = require('./routers/channel.routes')
const preferenceReouter = require('./routers/preferences.routes')
const commimentRouter = require('./routers/commiment.routes')
//Middleware
const app = express()
app.use(helmet())
app.use(cors())

// capture body
// cambiar bode-parser por express.bodyparser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// route middleware
app.use('/v1/api/auth', authRouter)
app.use('/v1/api/users', usersRouter)
app.use('/v1/api/regions', regionsRouter)
app.use('/v1/api/countries', countriesRouter)
app.use('/v1/api/cities', citiesRouter)
app.use('/v1/api/companies', companiesRouter)
app.use('/v1/api/contacts', contactsRouter)
app.use('/v1/api/file/upload', uploadRouter)
app.use('/v1/api/channels', channelRouter)
app.use('/v1/api/preferences', preferenceReouter)
app.use('/v1/api/commiment', commimentRouter)

app.listen(PORT, () => {
    console.log(`La app está iniciada en el puerto ${PORT}`)
})

module.exports = app