// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return (fare * int)
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}