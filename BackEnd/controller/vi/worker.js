const { customerServices } = require("../../services/customer-services")
const { workerServices } = require("../../services/worker-services")


module.exports = {
    login: async (req, res) => {
        try {

            //worker service instnace
            const workerServicesIntance = new workerServices()

            const { body: customerInfo } = await workerServicesIntance.findbyIdAndUpdate(req.body)

            if (customerInfo) return
            else return

        } catch (error) {
            return
        }
    },

    //add worker

}