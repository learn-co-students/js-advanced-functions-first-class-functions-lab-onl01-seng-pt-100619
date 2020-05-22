// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0,2)
}
const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(times){
    return function(fare){
        return fare * times
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, specialFunc){
    return specialFunc(driverArray)
}