const task = require('./tasks');

module.exports = function (io) {
    // tasks main socket events handler
    task(io);

}