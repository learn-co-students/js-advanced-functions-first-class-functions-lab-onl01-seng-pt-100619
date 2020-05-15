// Code your solution in this file!

//using the slice method able to return the first two drivers
//return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

//using the slice method able to return the last two drivers
//return an array of the last two drivers
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};



// `returnFirstTwoDrivers` function to as its first element
// `returnLastTwoDrivers` function to as its last element
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//returns a function
//should multiply a given value using the created multiplier
const createFareMultiplier = (x) => {
    return y => {
      return x * y;
    };
};
  
// is a function and doubles fares
const fareDoubler = (fare) => {
    return fare * 2;
};
  
//is a function and doubles fares
const fareTripler = (fare) => {
    return fare * 3;
};
  
//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = (arrayOfDrivers, l) => {
    return l(arrayOfDrivers);
};