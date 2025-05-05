const nodemailer = require('nodemailer')
const userModel = require('../models/user-model')

class MailrService {
    
    constructor (){
        this.transporter = nodemailer.createTransport({
            host:'smtp.yandex.ru',
            port:465,
            secure:true,
            auth:{
                user:'Dqizia@yandex.ru',
                pass:'Rjktcybrjds2'
            }
        })
    }

    async sendActivationMail (to,link) {
        try {
            await this.transporter.sendMail({
                from:'Dqizia@yandex.ru',
                to,
                subject:'Активация аккаунта на' + process.env.API_URL,
                text:'',
                html: `<div>
                    <h1>
                       Для активации перейдите по ссылке 
                    </h1>
                    <a href="${link}">${link}</a>
                </div>`
            })
        } catch (e) {
            console.log(e)
        }
    }

   

   
}

module.exports = new MailrService()