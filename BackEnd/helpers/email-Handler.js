const nodemailer = require('nodemailer');
let secureEnv = require('secure-env');

global.env = secureEnv({ secret: 'goltConfigSecrets' });

async function sendEmail(receiverEmail, subject, _html) {
    // if (!text) return ErrorHandler({ ControllerName, Message: 'email text is required', Status: 'Error', StartTime }, res);
    // if (!subject) return ErrorHandler({ ControllerName, Message: 'email subject is required', Status: 'Error', StartTime }, res);
    // if (!from) return ErrorHandler({ ControllerName, Message: 'sender email is required', Status: 'Error', StartTime }, res);

    var transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        service: 'gmail',
        port: 465,
        secure: true, // use TLS
        auth: {
            user: global.env.SMTP_EMAIL, // email address 
            pass: global.env.SMTP_PASS // password
        }
    });

    const mailOptions = {
        from: [global.env.SMTP_EMAIL, {
            name: 'GOLT App',
            address: global.env.SMTP_EMAIL
        }], // sender address
        to: receiverEmail, // list of receivers
        subject, // Subject line
        html: _html
    };

    const resp = await transporter.sendMail(mailOptions);
    transporter.close();

    return resp;
}
module.exports = {sendEmail}
