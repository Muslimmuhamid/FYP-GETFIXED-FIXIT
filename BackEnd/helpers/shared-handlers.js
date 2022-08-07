const mongoose = require("mongoose");

// const asyncFuncWrapper = function (f) {
//     return function () {
//         try {
//             return f.apply(this, arguments);
//         } catch (error) {
//             return { success: false, error, body: null };
//         }
//     }
// }
function stringifyError(err, filter, space) {
    var plainObject = {};
    Object.getOwnPropertyNames(err).forEach(function (key) {
        plainObject[key] = err[key];
    });
    return JSON.stringify(plainObject, filter, space);
};


function asyncFuncWrapper(fn) {
    return async function wrappedFn(req, res, next) {
        try {
            await fn(req, res);
        } catch (err) {
            next(err);
        }
    };
}

function parseSavedResponse(data, remKeys) {
    let obj = data && JSON.parse(JSON.stringify(data));
    remKeys.forEach(x => delete obj[x]);

    return obj;
}

function ObjectIdHandler(id) {
    return mongoose.Types.ObjectId(id);
}

module.exports = {
    asyncFuncWrapper, stringifyError, parseSavedResponse,
    ObjectIdHandler,
}