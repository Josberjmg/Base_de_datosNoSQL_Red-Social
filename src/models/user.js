const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    registerdate:{
        type: String,
        required:false
    },
    friends:{
        type: Number,
        required:false
    },
    publications:{
        title:String,
        reactions:Number,
        comments:Number,
        shares: Number
    },
    dataperfil:{
        ubication: String,
        gender: String
    },
});

module.exports=mongoose.model('User', userSchema);
