const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('config/lib/config');
const { User } = require('../models/user');

async function _accessToken(uid) {
    const privateKey = config.get('jwtPrivateKey');

    const accessToken = jwt.sign({
        userId: uid,
        iat: Date.now(),
        expireAt: moment().add(2, 'hours')
    }, privateKey);

    return accessToken;
}

async function _refreshToken(uid) {
    const privateKey = config.get('jwtPrivateKey');
    const user = await User.findOne({ userId: uid });

    const refreshToken = jwt.sign({
        iat: Date.now(),
        expireAt: moment().add(5, 'days')
    }, privateKey);

    await User.findOneAndUpdate(
        { _id: user._id },
        { $set: { refreshToken: refreshToken } },
        { new: true });

    return refreshToken;
}

module.exports = { _accessToken, _refreshToken }