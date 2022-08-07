const { customerServices } = require("../../services/customer-services")
const { workerServices } = require("../../services/worker-services")
const { responseHandlers: {
    ErrorHandler,
    SuccessHandler
} } = require('../../helpers')
const HTTP_STATUS = require('../../utilities/http-status-codes')

module.exports = {
    login: async (req, res) => {
        try {

            //customer service instnace
            const customerServicesIntance = new customerServices()

            const { body: customerInfo } = await customerServicesIntance.findbyIdAndUpdate(req.body)

            if (customerInfo) return SuccessHandler({ controllerName, message: "Login successful", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)

            else return ErrorHandler({ controllerName, message: "please input valid credentials  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    Signup: async (req, res) => {
        try {
            let obj = req.body
            //customer service instnace

            const customerServicesIntance = new customerServices()

            const { body: customerInfo } = await customerServicesIntance.Signup()

            //check if user is already register or not
            if (customerInfo) {
                const { body: result } = await customerServicesIntance.Signup()

                //chcek if user registration is done or not
                if (result) {
                    return SuccessHandler({ controllerName, message: "User registered", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
                }
                else return ErrorHandler({ controllerName, message: "error in user registration", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

            }
            else return ErrorHandler({ controllerName, message: "error in user registration", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);

        }
    }
}