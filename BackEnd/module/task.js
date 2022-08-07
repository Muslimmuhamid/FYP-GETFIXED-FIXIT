const mongoose = require("mongoose")

const Equipments=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    }
})

const GeoSchema = new mongoose.Schema({
    type:
    {
        type: String,
        default: "Point"

    },
    coordinates:
    {
        type: [Number]
    }
})

const TaskModel =  new mongoose.Schema({
    name: {
        type: String
    },
    WorkerProfession:{
        type: String
    },
    audio: {
        type: String
    },
    pictures: {
        type: [String],
    },
    geometry: GeoSchema,
    text: {
        type: String
    },
    customerId: {
        type: String
    },
    workerId: {
        type: String
    },
    progressStatus: {
        type: Array
    },
    postedDate: {
        type: Date,
        default: Date.now()
    },
    totalAmount: {
        type: Number
    },
    BidAcceptedAmount: {
        type: Number
    },
    additionalEquipment: {
        type:[Equipments],
        default:[]
    },
    quotedAmount: {
        type:Number
    }
})

TaskModel.index({geometry:"2dsphere"});
module.exports =mongoose.model("tasks",TaskModel)