const express = require("express")
require('dotenv').config()
const cors = require('cors')

const connect = require('./db')
const app = express()

app.use(cors({origin: true}))
app.use(express.json())




connect(app)


