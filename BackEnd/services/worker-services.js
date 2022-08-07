const workerModel  = require("../module/worker")


class workerServices {
    async findbyIdAndUpdate(obj) {
        const result = await workerModel.findByIdAndUpdate(obj._id, { isActive: true }, { new: true }).lean()

        return { success: true, body: result }
    }

    async findbyEmail(obj) {
        const result = await workerModel.findOne({ email: obj.email }).lean()
        return { success: true, body: result }
    }

    async Signup(payload) {
        const result = await workerModel.create(payload)

        return { success: true, body: result }
    }
    async findbyId(obj) {
        const result = await workerModel.findById(obj.wrokerId).lean()

        return { success: true, body: result }
    }

    async findAllWaiting() {
        const result = await workerModel.find({isVerfied:false}).lean()

        return { success: true, body: result }
    }


    async approvedByAdmin(obj) {
        const result = await workerModel.findByIdAndUpdate(obj.id, { isVerfied: true }, { $new: true }).lean()
        
        return{success:true,body:result}
    }

    async FindNearByWorker(payload) {
        const result = await workerModel.find({
            $and: [
                { WorkerProfession: payload.WorkerProfession },
                {
                    geometry:
                    {
                        $nearSphere: {
                            $geometry: {
                                type: 'Point',
                                coordinates: [payload.longitude, payload.latitude], //longitude and latitude
                            },
                            $minDistance: 0,
                            $maxDistance: 2 * 1000,
                        },
                    },
                }
            ]
        }).lean()
        console.log(result,"service");
        return { success: true, body: result }

    }
}

module.exports = { workerServices }