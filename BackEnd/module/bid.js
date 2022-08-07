const mongoose = require("mongoose")

const Equipments=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    }
})

const BidModel = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    taskId:{
        type:String
    },
    text:{
        type:String
    },
    workerId:{
        type:String
    },

    requiredEquipment:[Equipments],
    BidAmmount: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("bids", BidModel)