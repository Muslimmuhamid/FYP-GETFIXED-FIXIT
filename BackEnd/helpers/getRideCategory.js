// const geolib = require('geolib')
// const { RideService } = require('../models/ride-category')
// const findCategory = async () => {
//     var coord = [{ rideCategoryId: "61f3d098a4c9e52f75600e90", driverId: "61f3d098a4c9e52f75600e90", lat: 24.885086, lng: 67.080236 }, { rideCategoryId: "61f3d0a8a4c9e52f75600e92", driverId: "61f3d098a4c9e52f75600e90", lat: 24.881270, lng: 67.084206 }, { rideCategoryId: "61f3d0daa4c9e52f75600e95", driverId: "61f3d098a4c9e52f75600e90", lat: 24.881056, lng: 67.080751 }];
//     const rideCategory = await RideService.find().lean()
//     // for (let i = 0; i < coord.length; i++) {
        
//     // }

//     const rideCategorylist = rideCategory.map( rideCat => {
//         const coords = coord.filter(dirver => {
//             if (rideCat._id == dirver.rideCategoryId) return dirver
//         })
//         var current = {
//             lat: 24.884346, lng: 67.084764
//         }

//         var distFromCurrent = (coord) => {
//             return { coord: coord, dist: geolib.convertDistance(geolib.getDistance(current, { lat: coord.lat, lng: coord.lng }), 'km'), time: (geolib.convertDistance(geolib.getDistance(current, { lat: coord.lat, lng: coord.lng }),'km') / 10)*60 };
//         }
//         var closest = coords.map(a => {
//             return distFromCurrent(a)
//         }).sort((a, b) => { return `${a.dist - b.dist}` })
//         let obj = {
//             ...rideCat,
//             estimatedArrivalTime:`${Math.round(closest[0].time)} mint`
//         }
//         return obj
//     })
//     return rideCategorylist 
   
    
//     // console.log(distFromCurrent(coord));
   
//     // .sort((a, b) => { return a.dist - b.dist })[0];
//     // const d = { name: "ahmed" }
//     // const ahmed  =
  
// }

// module.exports = { findCategory }