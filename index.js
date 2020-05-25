
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2); 
};

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(fare){
        return number*fare
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driversArray, driversFunction) {
    return driversFunction(driversArray)
};

