const { customerServices } = require("../../services/customer-services")
const { workerServices } = require("../../services/worker-services")
const { taskServices } = require("../../services/task-services")
const { bidServices } = require("../../services/bid-services")
const { responseHandlers: {
    ErrorHandler,
    SuccessHandler
} } = require('../../helpers')
const HTTP_STATUS = require('../../utilities/http-status-codes')

module.exports = {
    addTask: async (req, res) => {
        try {
            console.log(req.body,"body");
            
            var controllerName = req.originalUrl;
            const startTime = new Date();
            // let file = await req.files
            // let arr = await file.map(element => {
                //     return element.filename
                // });
                let obj = req.body
                // obj.pictures = arr
                //worker service instnace
                const workerServicesIntance = new workerServices()
                //task service instnace
                const taskServicesIntance = new taskServices()
                let { body: nearby } = await workerServicesIntance.FindNearByWorker(req.body)
                let nearbyWorker = nearby.map(e => {
                    return e._id
                })
                obj.geometry = {
                    coordinates: [req.body.longitude, req.body.latitude]
                }
                console.log(obj);
                obj.progressStatus = [{
                    status: "searching",
                    createdAt:new Date()
                }]
                console.log("kkk"); 
                if (nearbyWorker) {
                const { body: result } = await taskServicesIntance.addtask(obj);
                //chcek if task  is add or not
                if (result) {
                    let showObjToWorker = {
                        quotedAmount: result.quotedAmount,
                        // pictures: result.pictures,
                        text: result.text,
                        address: result.address
                    }
                    console.log(showObjToWorker);
                    let io = req.app.get('io');
                    let a = io.of('/task').emit("passTaskToWorker", { data: { showObjToWorker: showObjToWorker, nearbyWorker: nearbyWorker } });
                    console.log(a);
                    return SuccessHandler({ controllerName, message: "task added", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
                }
                else return ErrorHandler({ controllerName, message: "error in adding task", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

            }
            else return ErrorHandler({ controllerName, message: "no nearby worker is found", statusCode: HTTP_STATUS.NOT_FOUND, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },


    // add bidd
    addBid: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //bid service instnace
            const bidServicesIntance = new bidServices()

            let { body: result } = await bidServicesIntance.addBid(req.body)

            if (result) {
                let bidObj = {
                    name: result.name,
                    address: result.address,
                    bidAmount: result.BidAmmount
                }
                let io = req.app.get('io');
                let a = io.of('/task').emit('bid', { data: { objShowToCustomer: bidObj, taskId: result._id } });
                console.log(a);
                return SuccessHandler({ controllerName, message: "bid added", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            }
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    //add equipment 
    addEuipment: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();
            let file = await req.files
            let arr = await file.map(element => {
                return element.filename
            });
            let obj = req.body
            obj.pictures = arr
            //task service instnace
            const taskServicesIntance = new taskServices()

            let { body: result } = await taskServicesIntance.addEuipment(obj)

            if (result) return SuccessHandler({ controllerName, message: "equipment added", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    //equipment area
    showEquipment: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //task service instnace
            const taskServicesIntance = new taskServices()

            const { body: result } = await taskServicesIntance.showEquipment(req.body)

            if (result) return SuccessHandler({ controllerName, message: "equipment listen", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    //show task 
    showTask: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();
            
            //task service instnace
            const taskServicesIntance = new taskServices()
            console.log(req.body,"do");
            const { body: result } = await taskServicesIntance.showTasks(req.body)
            console.log("kk",result);

            if (result) return SuccessHandler({ controllerName, message: "tasks listen", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },
    addProgress: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //task service instnace
            const taskServicesIntance = new taskServices()
 
            const { body: result } = await taskServicesIntance.addProgress(req.body)
            if (result) return SuccessHandler({ controllerName, message: "progress added", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },

    ShowProgress: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //task service instnace
            const taskServicesIntance = new taskServices()

            const { body: result } = await taskServicesIntance.showProgress(req.body)
            if (result) return SuccessHandler({ controllerName, message: "tasks listen", statusCode: HTTP_STATUS.SUCCESS, responseData: result.progressStatus, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },


    showBids: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //task service instnace
            const taskServicesIntance = new taskServices()
            //bid service instnace
    const bidServicesIntance = new bidServices()
            const { body: result } = await bidServicesIntance.showBids(req.body)
            if (result) return SuccessHandler({ controllerName, message: "bids list", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    },


    acceptTask: async (req, res) => {
        try {
            var controllerName = req.originalUrl;
            const startTime = new Date();

            //task service instnace
            const taskServicesIntance = new taskServices()
            //bid service instnace
    const bidServicesIntance = new bidServices()
            const { body: info } = await bidServicesIntance.showSingleBid(req.body)
            if(info){
            const { body: result } = await taskServicesIntance.acceptBid(info)
            let io = req.app.get('io');
                let a = io.of('/task').emit('acceptBid', { data: { message: `your bid is accepted by customer At ${info.BidAmmount}`, taskId: result._id } });
                console.log(a);
            if (result) return SuccessHandler({ controllerName, message: "bid accepted", statusCode: HTTP_STATUS.SUCCESS, responseData: result, startTime }, res)
            else return ErrorHandler({ controllerName, message: "server error", statusCode: HTTP_STATUS.BAD_REQUEST, startTime }, res)

            }
          
        } catch (error) {
            return ErrorHandler({ message: error.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR, status: "error", }, res);
        }
    }

}