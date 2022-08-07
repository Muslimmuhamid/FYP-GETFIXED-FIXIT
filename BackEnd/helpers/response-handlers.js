const status_codes = require("../utilities/http-status-codes")


const ErrorHandler = (data, res, action) => {
    // save data in logs table
    data["endTime"] = new Date();
    // if (!action) AppLogs(data);

    res.status(data.statusCode ? data.statusCode : status_codes.BAD_REQUEST)
    res.send({
        statusCode: data.statusCode ? data.statusCode : status_codes.BAD_REQUEST,
        status: data.status,
        errorCode: data.errorCode,
        message: data.message
    });
};

const SuccessHandler = (data, res, next) => {
    // save data in logs table
    data["endTime"] = new Date();
    // if (data.RequestResponse) AppLogs(data);

    res.send({
        statusCode: status_codes.SUCCESS,
        status: data.status,
        message: data.message,
        data: data.responseData,
        token: data.token,
        // we can send any additional key/value pair if needed
    });
};

module.exports = { ErrorHandler, SuccessHandler };
