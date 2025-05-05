const ApiError = require('../exceptions/api-error')
const userModel = require('../models/user-model')
const userService = require('../service/user-service')
const {validationResult} = require('express-validator')
  
class UserController {
    async registration(req,res,next) {
        try {
            const {email,password} = req.body
            const userData =  await userService.registration(email,password)
            res.json(userData)
        } catch (e) {
           res.json('Ошибка Регистрации')
        }
    }

    async login(req,res,next) {
        try {
            const {email,password} = req.body
            const userData = await userService.login(email,password)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
            res.json(userData)
        } catch (e) {
            
        }
    }

    async logout(req,res,next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json(200)
        } catch (e) {
           
        }
    }

    
    async activate(req,res,next) {
        try {
            const activateLink = req.params.link
            await userService.activate(activateLink)
            res.redirect(process.env.CLIENT_URL)
        } catch (e) {
           
        }
    }

    async refresh(req,res,next) {
        try {
                
        } catch (e) {
          
        }
    }

    async getUsers(req,res,next) {
        try {
            const users = await userModel.find()
            res.json(['1231','1231'])
        } catch (e) {
            
        }
    }
}


module.exports = new UserController()