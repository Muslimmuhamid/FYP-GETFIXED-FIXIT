const express = require('express');
const router = express.Router();

// wroker controller
const WorkerController = require('../controller/vi/worker');


router.post('/login', WorkerController.login)


module.exports = router
