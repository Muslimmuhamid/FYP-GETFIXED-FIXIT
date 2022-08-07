const {customerModel}=require("../module/customer")


class customerServices{
    async findbyIdAndUpdate(obj){
        const result =await customerModel.findByIdAndUpdate(obj._id,{isActive:true},{new:true}).lean()

        return{success:true,body:result}
    }

    async findbyEmail(obj) {
        const result = await customerModel.findOne({email:obj.email}).lean()

        return { success: true, body: result }
    }

    async Signup(payload) {
        const result = await customerModel.create(payload)
        
        return{success:true,body:result}
    }
    async findbyId(obj) {
        const result = await customerModel.findById(obj.userId).lean()

        return { success: true, body: result }
    }

}

module.exports={customerServices}