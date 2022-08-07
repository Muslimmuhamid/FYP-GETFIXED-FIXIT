const nodemailer = require('nodemailer');

async function sendEmail(receiverEmail, subject) {
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
            user:"rashid.sj91@gmail.com" , // email address 
            pass:"shahidjamal" // password
        }
    });

    const mailOptions = {
        from: ["rashid.sj91@gmail.com", {
            name: '',
            address: "rashid.sj91@gmail.com" 
        }], // sender address
        to: receiverEmail, // list of receivers
        subject, // Subject line
    };

    const resp = await transporter.sendMail(mailOptions);
    transporter.close();

    return resp;
}
module.exports = {sendEmail}
