// const jwt = require("jsonwebtoken");

// function GenerateToken(payload) {
//     // console.log({ payload })
//     const token = jwt.sign(payload, global.env.JWT_TOKEN_SECRET);
//     return token;
// }

// function VerifyToken(payload) {
//     const tokenPayload = jwt.verify(payload.token, global.env.JWT_TOKEN_SECRET);
//     return tokenPayload;
// }

// module.exports = { GenerateToken, VerifyToken }