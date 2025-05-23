const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-models')
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{expiresIn:'30m'})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{expiresIn:'30d'})

        return {
            accessToken,
            refreshToken
        }

    }
    async saveToken (userId,refreshToken){
        const tokenData = await tokenModel.findOne({user:userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        const token = tokenModel.create({user:userId,refreshToken})
        return token
    }

    async removeToken(refreshToken){
        
    }
}

module.exports = new TokenService()