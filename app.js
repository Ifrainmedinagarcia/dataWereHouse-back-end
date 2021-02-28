const express = require('express')
const helmet = require('helmet')
const sequelize = require('./database/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000
//require Routes
const authRouter = require('./routers/auth.routes')
const usersRouter = require('./routers/users.routes')

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



app.listen(PORT, () => {
    console.log(`La app está iniciada en el puerto ${PORT}`)
})

module.exports = app    