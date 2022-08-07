const TaskModel = require("../module/task")


class taskServices {
    // async findbyIdAndUpdate(obj) {
    //     const result = await customerModel.findByIdAndUpdate(obj.userId, { isActive: true }, { new: true }).lean()

    //     return { success: true, body: result }
    // }

    // async findbyEmail(obj) {
    //     const result = await customerModel.findOne(obj.email).lean()

    //     return { success: true, body: result }
    // }
    async addProgress(payload) {
        payload.progressStatus.createdAt=new Date()
        const result = await TaskModel.findByIdAndUpdate(payload.id, { $push: { progressStatus: payload.progressStatus } }, { new: true }).lean()
        return { success: true, body: result }
    }

    async showProgress(payload) {
        const result = await TaskModel.findById(payload.id).lean()
        return { success: true, body: result }
    }

    async acceptBid(payload) {
        const result = await TaskModel.findByIdAndUpdate(payload.taskId,{workerId:payload.workerId,BidAcceptedAmount:payload.BidAmmount},{new:true}).lean()
        return { success: true, body: result }
    }

    async addtask(payload) {
        const result = await TaskModel.create(payload)

        return { success: true, body: result }
    }

    async showTasks(payload) {
        const result = await TaskModel.find({
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
        ).lean()
        return { success: true, body: result }

    }

    // async findbyId(obj) {
    //     const result = await customerModel.findById(obj.userId).lean()

    //     return { success: true, body: result }
    // }
    async addEuipment(payload) {
        const result = await TaskModel.findByIdAndUpdate(payload.taskId, { $push: { additionalEquipment: payload.additionalEquipment } }, { new: true }).lean()

        return { success: true, body: result }
    }

    async showEquipment(payload) {
        const result = await TaskModel.findById(payload.taskId).lean()

        return { success: true, body: result.additionalEquipment }
    }

}

module.exports = { taskServices }