const express = require('express');
const router = express.Router();

// wroker controller
const AdminController = require('../controller/vi/admin');


router.post('/adminApproved', AdminController.adminApproved)
router.post('/viewAllWaiting', AdminController.waitingWorkers)

module.exports = router