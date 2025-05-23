const {Schema,model} = require('mongoose')


const UserSchema = new Schema({
    email:{type:String,unique:true,require:true},
    password:{type:String,unique:false,require:true},
    isActivated:{type:Boolean,default:false},
    activationLink:{type:String},
})


module.exports = model('User',UserSchema)