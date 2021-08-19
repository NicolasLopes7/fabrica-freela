const express = require('express')
const cors = require('cors')

const productLineRoutes = require('./routes/productLineRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(productLineRoutes)

app.listen(process.env.PORT || 5000)