const worker=require('./worker')
const customer = require('./customer')
const auth = require('./auth')
const task = require('./task')
const admin = require('./admin')

module.exports = {
    auth,
    worker,
    admin,
    customer,
    task
}