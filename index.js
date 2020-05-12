// Code your solution in this file!

const returnFirstTwoDrivers= function(array){
    let newArray = [array[0],array[1]]
    return newArray;
}

const returnLastTwoDrivers= function(array){
    let newArray = [array[array.length -2 ], array[array.length - 1]]
    return newArray;
} // cant access last items in array like in ruby

const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers
    ] // array

function createFareMultiplier(multiplier){
    return function(fare){return fare * multiplier };
} // higher order 
// multiplier

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, functionName ){
    
    return functionName(array)
    // use the function name as an argument/variable so the function returned can be changed
}

// we are passing functions and dynamic or active information into variables
// also manipulating functions to be called inside other functions
// chain actions or functions to call in inner scopes and in an abstracted way
// the line/ difference bewteen variables and functions is almost eliminated


