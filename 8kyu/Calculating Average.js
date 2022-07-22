/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// My solution:
const find_average = (array) => (array?.length > 0 ? array.reduce((acc, curr) => (acc += curr), 0) / array.length : 0);
