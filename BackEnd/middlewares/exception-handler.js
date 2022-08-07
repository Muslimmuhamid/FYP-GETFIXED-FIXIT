const {
    responseHandlers: { ErrorHandler },
    sharedHandlers: { stringifyError }
} = require('../helpers');
const HTTP_STATUS = require("../utilities/http-status-codes");

module.exports = function (err, res) {
    if (err) {
        return ErrorHandler({
            message: stringifyError(err, null, '\t'),
            statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            status: 'error'
        }, res)
    }
}