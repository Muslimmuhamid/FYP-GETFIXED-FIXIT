const mongoose=require("mongoose")


const customerModel= mongoose.model("customers",new mongoose.Schema({
    name:{
        type:String
    },
    Number:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String
    },
    password:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})
)

module.exports={customerModel}