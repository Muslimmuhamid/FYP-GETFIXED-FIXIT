const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// // const engines = require("consolidate");
const path = require('path')
// const { ExceptionHandler } = require('./middlewares')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger/swagger.json');
const socketIOHandler = require('./socket-handlers');
// let secureEnv = require('secure-env');

// global.env = secureEnv({ secret: 'fixitit' });
// global.__basedir = __dirname;


const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io')(server);

const v1Routes = require('./routes');


const bodyParser = require('body-parser');
// const dbService = require('./services/db-service');
// console.log(global.env.DEV_DB_URL);
// // dev server conf
// mongoose.connect("mongodb://admin:merk1234@localhost:27017/fixit?authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Dev Db connected with api'))
//     .catch((err) => console.log(err))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const mongoDB = "mongodb://localhost:27017/fyp";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'
));

// // live db conf
// // mongoose.connect(global.env.LIVE_DB_URL, { useNewUrlParser: true, useCreateIndex: true })
// //     .then(() => console.log('Live Db connected with api'))
// //     .catch((err) => console.log(err))


// cors Enabled
app.use(cors({
    exposedHeaders: ['authtoken'],
}));


// //sending email
// //sending mail with otp
// // const {transporter,mailOptions}=require("./helpers/index")
// // transporter.sendMail(mailOptions("ahmed.afridi091@gmail.com","done"), function (Error, info) {
// //     if (Error) {
// //        console.log((Error, "email not send"));
// //     } else {
// //         console.log(info);
// //     }
// // })

// // Views
// // app.engine("ejs", engines.ejs);
// // app.set("views", path.join(__dirname, "/views"));
// // app.set("view engine", "ejs");

app.use(express.static('public'))
// app.use('/ride-category', express.static(__dirname + '/public/ride-category'));
// // app.use('/country-flags', express.static(__dirname + '/public/country-flags'));
// // app.use('/attachments', express.static(__dirname + '/public/attachments'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // swagger document ui setup
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // v1 routes
app.use('/api/v1/auth', v1Routes.auth);
app.use('/api/v1/task', v1Routes.task);
app.use('/api/v1/admin',v1Routes.admin)

// socketIO handler
socketIOHandler(socketio);
app.set('io', socketio);


// For Runtime Error Handling
// app.use((err, req, res, next) => {
//     ExceptionHandler(err, res);

//     // for logging error in log file.
//     next(err);
// });


// app.get('/', (req, res) => {
//     res.send('<h1>GOLT API</h1>')
// })

// // server.listen(process.env.PORT, (err) => {
// //     if (err) console.log(err);
// //     console.log('Api run on port 3001')
// // })
// const mail = async () => {
//     const { VerifyOtp } = require('./email-handler/email-text')
//     const { emailtemplate } = require('./email-handler/index')
//     const { sendEmail } = require('./email-handler/email-config')
//     const _html = emailtemplate(VerifyOtp(2991, 'sadsdsadsa.com'), "English")
//     console.log(await sendEmail("ahmed.afridi091@gmail.com", "sdadsa", _html));
// }
// // mail()
server.listen(4001, (err) => {
    if (err) console.log(err);
   else console.log('Api run on port 4001')
})

// const { findNear, findCategory } = require('./helpers/index')

// // const a = findNear()
// // setTimeout(() => {
// //     console.log(a);
// // }, 400);
// // let d=34
// // let a=d/100
// // console.log(a)
// // const bcrypt = require('bcrypt');

// // bcrypt.hash("ahmed11", 12, (err, hash) => {
// //    console.log(hash);
// // });




// // const { createClient } = require('@node-redis/client');
// // (async () => {
// //     const client = createClient();

// //     client.on('error', (err) => console.log('Redis Client Error', err));

// //     await client.connect();

// //     await client.set('key', 'value');
// //     const value = await client.get('key');
// //     console.log(value);})();
// // const moment=require('moment')

// // var day=moment().utc(true).startOf('day')
// // var date= new Date(day)
// // console.log(day);
// // console.log(date);


// const bodyparser = require('body-parser')
// const { admin } = require('./firebase')
// app.use(bodyparser.json())
// const notification_options = {
//     priority: "high",
//     timeToLive: 60 * 60 * 24
// };
// app.post('/firebase/notification', (req, res) => {
//     const registrationToken = req.body.registrationToken
//     // const message = req.body.message
//     const options = notification_options
//     const message_notification = {
//         notification: {
//             title: req.body.title,
//             body: req.body.message
//         }
//     };

//     admin.messaging().sendToDevice(registrationToken, message_notification, options)
//         .then(response => {
//             console.log(response.results);
//             res.status(200).send("Notification sent successfully")

//         })
//         .catch(error => {
//             console.log(error.results);
//         });

// })


