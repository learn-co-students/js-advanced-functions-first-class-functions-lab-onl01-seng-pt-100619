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

function createFareMultiplier(integer){
    return function(value ){return value * integer };
} // higher order 
// multiplier

function fareDoubler(fare){
    return fare *2;
}

function fareTripler(fare){
    return fare *3;
}

const selectDifferentDrivers = function(array, functionName ){
    
    return functionName(array)
    // use the function name as an argument/variable so the function returned can be changed
}




