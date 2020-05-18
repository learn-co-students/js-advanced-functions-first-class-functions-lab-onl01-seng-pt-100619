// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
   var newArray = arr.slice(0,2)
   return newArray
}

const returnLastTwoDrivers = function(arr) {
    var newArray = arr.slice(arr.length-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
    return function() {
        return i * i
    }
}

function fareDoubler(i) {
    return i * 2
}

function fareTripler(i) {
    return i * 3
}

function selectDifferentDrivers(arr, func) {
    return func(arr)
}