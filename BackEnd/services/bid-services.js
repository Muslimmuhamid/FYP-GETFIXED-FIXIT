const BidModel = require("../module/bid");


class bidServices {
    async addBid(payload) {
        const result =await BidModel.create(payload)

        return {success:true,body:result}
    }
    async showBids(payload) {
        const result =await BidModel.find({taskId:payload.taskId}).lean()

        return {success:true,body:result}
    }

    async showSingleBid(payload) {
        const result =await BidModel.findById(payload.bidId).lean()

        return {success:true,body:result}
    }
    
    
}


module.exports = { bidServices }