const express = require('express');
const router = express.Router();

// wroker controller
const CustomerController = require('../controller/vi/customer');


router.post('/login', CustomerController.login)


module.exports = router