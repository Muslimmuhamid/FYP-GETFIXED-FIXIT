const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid')
const moment = require("moment");
const { AssignRole } = require('../models/assignRole');
const { Role } = require('../models/roles');
const { ErrorHandler, ResponseHandler } = require('../middlewares/responsehandler')
const config = require('config/lib/config');
const { User } = require('../models/user')


function extractToken(token) {
    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1]
    } else {
        console.log('Invalid token')
        // return res.send('Invalid token')
    }

    return token;
}


async function verifyToken(req, res, next) {
    const StartTime = new Date();
    const privateKey = config.get('jwtPrivateKey');
    var token = req.headers['access-token'];
    if (!token) return ErrorHandler({ ControllerName: 'check verifyToken middleware', Message: 'Access token. No token provided!', Status: 'Error', StartTime }, res);

    var _token = extractToken(token);
    const decode = jwt.verify(_token, privateKey);

    if (moment().utc() > moment(decode.expireAt).utc()) {
        return ErrorHandler({ ControllerName: 'check verifyToken middleware', Message: 'Invalid token is provided!', statusCode: 401, Status: 'Error', StartTime }, res);
    }

    next();
}

const portalUser = async (req, res, next) => {
    const StartTime = new Date();
    const assignRole = await AssignRole.findOne({ userId: req.user._id });
    const roles = await Role.findOne({ roleId: assignRole.roleId });

    if (roles.roleId == 'roleId-ab02827d33b241') return ErrorHandler({ ControllerName: 'portaluser middleware', Message: 'Invalid email or password', Status: 'Error', StartTime }, res);
    next();
}


function admin(req, res, next) {
    if (req.user.roleId != 'roleId-0137819d8547a4b') return res.status(403).send('Access denied!');
    next();
}

function adminOrDoctor(req, res, next) {
    if (req.user.roleId != 1 && req.user.roleId != 2) return res.status(403).send('Access denied!');
    next();
}

function adminOrPatient(req, res, next) {
    if (req.user.roleId != 1 && req.user.roleId != 3) return res.status(403).send('Access denied!');
    next();
}

function doctor(req, res, next) {
    const StartTime = new Date();
    if (req.user.roleId != 'roleId-a537a780303728') return ErrorHandler({ ControllerName: 'doctor middleware', Message: 'Invalid email or password', Status: 'Error', StartTime }, res);
    next();
}

function patient(req, res, next) {
    const StartTime = new Date();
    if (req.user.roleId != 'roleId-ab02827d33b241') return ErrorHandler({ ControllerName: 'patient middleware', Message: 'Invalid email or password', Status: 'Error', StartTime }, res);
    next();
}

function _randID() {
    // Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

module.exports = { verifyToken, admin, portalUser, doctor, patient, _randID, adminOrDoctor, adminOrPatient };