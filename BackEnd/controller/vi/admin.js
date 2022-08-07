const { workerServices } = require("../../services/worker-services")
const { responseHandlers: {
    ErrorHandler,
    SuccessHandler
} } = require('../../helpers')
const HTTP_STATUS = require('../../utilities/http-status-codes')

module.exports = {
    adminApproved: async (req, res) => 
    {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //worker service instnace
            const workerServicesIntance = new workerServices()

            const { body: result } = await workerServicesIntance.approvedByAdmin(req.body)
            
            //check 
            if (result !== null) {
                return SuccessHandler({ controllerName, message: "user verification completed", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            }
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    //view all waiting workers

    waitingWorkers: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //worker service instnace
            const workerServicesIntance = new workerServices()

            const { body: result } = await workerServicesIntance.findAllWaiting(req.body)

            //check 
            if (result !== null) {
                return SuccessHandler({ controllerName, message: "user verification completed", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            }
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        } 
    }
}