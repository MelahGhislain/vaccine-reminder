const nodemailer = require('nodemailer')

const sendMail = (email,text) =>{
    let smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth:{
            user: "agendiaester@gmail.com",
            pass: "password"
        }
    })

    let mail = {
        from: "agendiaester@gmail.com",
        to: email,
        subject: "Vaccine Reminder",
        text: text,
        html: "<b> vaccine reminder </b>",
    }

    smtpTransport.sendMail(mail, (err, response)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Message sent :" + response.messageId)
        }
        smtpTransport.close()
    })
}

module.exports = sendMail