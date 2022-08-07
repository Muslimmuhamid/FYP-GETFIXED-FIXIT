const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
//path where image will save
const diskStorage = {
    destination: function (req, file, cb) {
        cb(null, 'public/tasks/');
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        cb(null, extArray[1] + "-" + Date.now() + path.extname(file.originalname));
    }
}

const storage = multer.diskStorage(diskStorage);
var upload = multer({ storage: storage })


//for equipment
//path where image will save
let diskStoragee = {
    destination: function (req, file, cb) {
        cb(null, 'public/equipment/');
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        cb(null, extArray[1] + "-" + Date.now() + path.extname(file.originalname));
    }
}

const storagee = multer.diskStorage(diskStoragee);
var uploads = multer({ storage: storagee })
// wroker controller
const TaskController = require('../controller/vi/task');


router.post('/addTask',  TaskController.addTask)
// router.post('/addTask', upload.array("image"), TaskController.addTask)
router.post('/addBid', TaskController.addBid)
router.post('/addEquipment', uploads.array("image"), TaskController.addEuipment)
router.post('/showEquipment', TaskController.showEquipment)
router.post('/showTasks', TaskController.showTask)
router.post('/addProgress', TaskController.addProgress)
router.post('/showProgress', TaskController.ShowProgress)
router.post('/showBids', TaskController.showBids)
router.post('/acceptBid', TaskController.acceptTask)



module.exports = router