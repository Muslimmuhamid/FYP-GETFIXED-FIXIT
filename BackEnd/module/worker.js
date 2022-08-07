const mongoose=require("mongoose")


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
const workerModel= new mongoose.Schema({
    name:{
        type:String
    },
    geometry: GeoSchema,
    Number:{
        type:Number
    },
    WorkerProfession:{
        type: String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    profileImage:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:false
    },
    CNIC:{
        type:Number
    },
    CNICimages:{
        type:[String]
    },
    address:{
        type:String
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

workerModel.index({geometry:"2dsphere"});
// workerModel.ensureIndexes({point:"2dsphere"});
module.exports=mongoose.model("workers",workerModel)