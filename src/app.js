const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')
const { User } = require('./models')
const app = express()
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({ force: false })
    .then(async() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })