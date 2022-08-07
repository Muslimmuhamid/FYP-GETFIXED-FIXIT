// const geolib = require('geolib')
// const DriverService = require("../services/driver-service")
// const { Driver } = require('../models/driver')
// const { bookingRequest } = require('../models/Booking-request')
// const findNear = async () => {
//     var customerCurrentCords = {
//         lat: 24.884346, lng: 67.084764
//     }
//     const rideCatId = "61f3d098a4c9e52f75600e90"
//     var coord = [{ bookingId: "61f3a1b0f605e32738d066a3", rideCategoryId: "61f3d098a4c9e52f75600e90", driverId: "61eec9912be855a5d37c2990", lat: 24.885086, lng: 67.080236 }, { rideCategoryId: "222", driverId: "61f3d098a4c9e52f75600e90", lat: 24.881270, lng: 67.084206 }, { rideCategoryId: "61f3d098a4c9e52f75600e90", driverId: "61f28b11b6783997e7fec298", lat: 24.881056, lng: 67.080751 }];
//     const drivers = coord.filter(driver => { return driver.rideCategoryId == rideCatId })
//     var distFromCurrent = (coord) => {
//         return { bookingId: coord.bookingId, driverId: coord.driverId, coord: coord, dist: geolib.convertDistance(geolib.getDistance(customerCurrentCords, { lat: coord.lat, lng: coord.lng }), 'km'), time: (geolib.convertDistance(geolib.getDistance(customerCurrentCords, { lat: coord.lat, lng: coord.lng }), 'km') / 10) * 60 };
//     }
//     var closest = drivers.map(a => {
//         return distFromCurrent(a)
//     }).sort((a, b) => { return `${a.dist - b.dist}` })
//     // .sort((a, b) => { return a.dist - b.dist })[0];
//     // console.log(closest);
//     const rating = await Promise.all(closest.map(async dri => {
//         const checkDriver = await bookingRequest.findOne({ $and: [{ driverId: dri.driverId }, { bookingId: dri.bookingId }, { driverAction: "rejected" }] }).lean()
//         if (checkDriver) {
//             // console.log("checkDriver");
//             closest.splice(closest.findIndex(ele => {
//                 return ele.driverId == dri.driverId
//             }))
//         }
//         else {
//             // console.log("aaa");
//             const rejectedRequestCount = (await bookingRequest.find({ $and: [{ driverId: dri.driverId }, { driverAction: "rejected" }] }).lean()).length
//             const DriverServiceInstance = new DriverService();
//             const ratings = await DriverServiceInstance.getDriverById(dri)
//             return { driverId: ratings.body._id, ratings: ratings.body.rating, lat: dri.coord.lat, lng: dri.coord.lng, rejectedRequets: rejectedRequestCount, dist: dri.dist, estimatedArrivalTime: Math.round(dri.time) }
//         }
//     }))
//     const afterCheckDrivers = rating.filter(ele => ele != undefined)
//     return afterCheckDrivers;
// }

// module.exports = { findNear }