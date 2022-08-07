const { customerServices } = require("../../services/customer-services")
const { workerServices } = require("../../services/worker-services")
const { UserServices } = require("../../services/user-services")
const bcrypt = require('bcrypt');
const { responseHandlers: {
    ErrorHandler,
    SuccessHandler
} } = require('../../helpers')
const HTTP_STATUS = require('../../utilities/http-status-codes')


module.exports = {
    signup: async (req, res) => {
        try {
            console.log("ss");
            var controllerName = req.originalUrl;
            const startTime = new Date();
            //user service instance
            const UserServicesIntance = new UserServices()



            if (req.body.role == "worker") {
                let obj = req.body
                //worker service instnace
console.log(req.body,"body");
                const workerServicesIntance = new workerServices()

                const { body: customerInfo } = await workerServicesIntance.findbyEmail(req.body)
                //check if user is already register or not
                if (!customerInfo) {
                    let hashedPassword = await bcrypt.hash(req.body.password, 12)
                    obj.password = hashedPassword
                    const { body: result } = await workerServicesIntance.Signup(req.body)

                    //chcek if user registration is done or not
                    if (result) {
                        let userObj = {
                            email: result.email,
                            userId: result._id,
                            Role: req.body.role
                        }
                        const { body: info } = await UserServicesIntance.createUser(userObj)
                        result.role = info.Role
                        console.log(info.Role);
                        return SuccessHandler({ controllerName, message: "worker registered", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
                    }
                    else return ErrorHandler({ controllerName, message: "error in worker registration", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

                }
                else return ErrorHandler({ controllerName, message: "worker is already register", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

            }
            else if (req.body.role == "customer") {
                let obj = req.body
                //customer service instnace

                const customerServicesIntance = new customerServices()

                const { body: customerInfo } = await customerServicesIntance.findbyEmail(req.body)

                //check if user is already register or not
                if (!customerInfo) {
                    let hashedPassword = await bcrypt.hash(req.body.password, 12)
                    obj.password = hashedPassword
                    const { body: result } = await customerServicesIntance.Signup(req.body)

                    //chcek if user registration is done or not
                    if (result) {
                        let userObj = {
                            email: result.email,
                            userId: result._id,
                            Role: req.body.role
                        }
                        const { body: info } = await UserServicesIntance.createUser(userObj)
                        return SuccessHandler({ controllerName, message: "User registered", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
                    }
                    else return ErrorHandler({ controllerName, message: "error in user registration", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

                }
                else return ErrorHandler({ controllerName, message: "user is already register", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
            }
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    login: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();
            //user service instance
            const UserServicesIntance = new UserServices()

            const { body: userInfo } = await UserServicesIntance.findByEmail(req.body)
            console.log(userInfo, "user");
            if (userInfo) {
                if (userInfo.Role == "worker") {
                    //customer service instnace
                    const workerServicesIntance = new workerServices()
                    const { body: info } = await workerServicesIntance.findbyEmail(req.body)
                    console.log(info,"info");
                    if (info.isVerfied == true) {
                        if (info) {

                            let hashedPassword = bcrypt.compareSync(req.body.password, info.password)
                            if (hashedPassword) {
                                const { body: customerInfo } = await workerServicesIntance.findbyIdAndUpdate(info._id)
                                if (customerInfo) {
                                    customerInfo.role = userInfo.Role
                                    console.log(customerInfo, "sasd");
                                    return SuccessHandler({ controllerName, message: "Login successful", statusCode: HTTP_STATUS.SUCCESS, responseData: customerInfo, startTime }, res)
                                }
                                else return ErrorHandler({ controllerName, message: "please input valid password  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
                            }
                            else return ErrorHandler({ controllerName, message: "please input valid password  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

                        }
                        else return ErrorHandler({ controllerName, message: "please input valid email  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
                    }
                    else return ErrorHandler({ controllerName, message: "please wait untill admin verified your documents ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
                }
                else if (userInfo.Role == "customer") {
                    //customer service instnace
                    const customerServicesIntance = new customerServices()
                    console.log("aaa");
                    const { body: info } = await customerServicesIntance.findbyEmail(req.body)
                    if (info) {

                        let hashedPassword = bcrypt.compareSync(req.body.password, info.password)
                        console.log(hashedPassword);
                        if (hashedPassword) {
                            const { body: customerInfo } = await customerServicesIntance.findbyIdAndUpdate(info._id)
                            if (customerInfo) {
                                customerInfo.role = userInfo.Role
                                console.log(customerInfo, "sasd");
                                return SuccessHandler({ controllerName, message: "Login successful", statusCode: HTTP_STATUS.SUCCESS, responseData: customerInfo, startTime }, res)
                            }
                            else return ErrorHandler({ controllerName, message: "please input valid password  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
                        }
                        else return ErrorHandler({ controllerName, message: "please input valid password  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

                    }
                    else return ErrorHandler({ controllerName, message: "please input valid email  ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
                }
            }
            else return ErrorHandler({ controllerName, message: "please input valid email correctly ", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
        } catch (error) {

        }
    }
}