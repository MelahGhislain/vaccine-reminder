const express = require("express")
require('dotenv').config()
const cors = require('cors')

const connect = require('./db')
const app = express()
const routes = require('./routes')

app.use(cors({origin: true}))
app.use(express.json())

// route middleware
app.use('/api/v1', routes())


// errors
// 4xx errors
app.use((req, res, next)=>{
    
})
// 5xx errors
app.use((err, req, res, next)=>{
    res.status(500).json(err)
})


connect(app)


