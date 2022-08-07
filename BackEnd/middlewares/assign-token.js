const { v4: uuidv4 } = require('uuid')
const { tokenHandler } = require('../helpers');
const AuthService = require('../services/auth-service');

module.exports = async function (req, res, next) {
    // auth service
    const AuthServiceInstance = new AuthService();

    var { body: user } = req.body.email ? await AuthServiceInstance.findUserByEmail({ email: req.body.email }) :
        await AuthServiceInstance.findUserById({ userId: req.body.userId });

    if (user) {
        const authToken = tokenHandler.GenerateToken({ userId: user.userId, currentId: uuidv4() });

        // set tokens in header
        res.header('authtoken', `Bearer ${authToken}`)
    }

    next();
}