/*
Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? 
Your task is to fix the sortArray function to sort all numbers in ascending order

Starting code:
var sortArray = function(value) {
  return value.split('').sort((c, p) => c / p ).join('');
}
*/

// My refactored solution:
const sortArray = (value) => [...value].sort((a, b) => a - b).join('');

// My solution:
var sortArray = function (value) {
  return value
    .split('')
    .sort((c, p) => c / p)
    .join('');
};
