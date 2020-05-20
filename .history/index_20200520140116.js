// Code your solution in this file!

 const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  const createFareMultiplier = function(multiplyFare) {
        return function (value) {
            return multiplyFare * value
        };
    };

    const createFareMultiplier = function(fareQuintupler) {
        return function (value) {
            return fareQuintupler * value
        };
    };