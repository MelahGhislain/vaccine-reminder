const mongoose = require('mongoose')


module.exports = (app) =>{
    mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology: true},(err)=>{
        if(err) return console.log("Could not connect to mongodb")
        console.log("Mongo DB connected successfuly")
        app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`))
    })
}