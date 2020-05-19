// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2) //closure sets int to 2 
//when fareDoubler(5) is called => it will be 2 * 5

const fareTripler = createFareMultiplier(3) //closure sets int to 3

function selectDifferentDrivers(drivers, driverFunction){ //accept one of the first 2 functions as an argument
    return driverFunction(drivers)
}