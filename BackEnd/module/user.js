const mongoose = require("mongoose")


const UserModel = new mongoose.Schema({
    email: {
        type:String
    },
    userId: {
       type:String
    },
    Role: {
      type:String  
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports =mongoose.model("users",UserModel)