// const moment = require('moment')
// // const d = new Date()
// const dob = moment('05/05/2022', "DD/MM/YYYY").format("YYYY-MM-DD")
// const date = moment().diff(dob, 'week', false)

// // console.log(d)
// console.log(date)

// // const weeks = moment(date).week()
// // console.log(weeks)

const User = require('./models/user.model')
const Vaccine = require('./models/vaccine.model')
const Child = require('./models/child.model')


const testing=async ()=>{
    console.log("=========================tried to run======================")
        // sendMail("melahghislain17@gmail.com", "23")
        // console.log("ran")
        try{
            const users = await User.find({})
            console.log(users)
            users.forEach(user =>{
                const {email, name} = user
                user.children.forEach(async(child) =>{
                    const childDoc = await Child.findById(child)
                    console.log(childDoc)
                })
            })
        }catch(err){
            console.log(err)
        }
        console.log("====================ended ================")
}

testing()