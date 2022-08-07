const express = require('express');
const router = express.Router();

// wroker controller
const AuthController = require('../controller/vi/auth');


router.post('/login', AuthController.login)
router.post('/signup', AuthController.signup)


module.exports = router