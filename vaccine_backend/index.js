const express = require("express")
require('dotenv').config()
const cors = require('cors')
const cron = require('node-cron')
const moment = require('moment')

const connect = require('./db')
const app = express()
const routes = require('./routes')
const sendMail = require("./utils/sendMail")
const User = require('./models/user.model')
const Vaccine = require('./models/vaccine.model')
const Child = require('./models/child.model')

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

//  Cron job is set to run every 5am every day
cron.schedule('0 5 * * *', async ()=>{
    
    const users = await User.find({})
    users.forEach(user =>{
        const {email, name} = user
        user.children.forEach(async(child) =>{
            // gets each child by his/her id
            const childDoc = await Child.findById(child)
            if(childDoc !== null){
                const {first_name, last_name, dob} = childDoc
                const childName = `${first_name} ${last_name}`

                const child_age_in_weeks = moment().diff(dob, "weeks", true)
                console.log(child_age_in_weeks)
                const vaccines = await Vaccine.find({})
                vaccines.forEach(vaccine =>{
                    if((vaccine.age - child_age_in_weeks === 1) || child_age_in_weeks === 0){
                        // console.log("true")
                        const text = `Dear ${name} Vaccine reminder wants to remind you about ${childName} next vaccination 
                                        don't forget to vaccinate your child`
                        sendMail(email, text)
                    }else{
                        // console.log("false")
                    }
                })
            }
        })
    })
})

connect(app)


