/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

Original code to debug:
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
*/

// My solution (not a simple fix of the original code):
const getSumOfDigits = (int) =>
  String(int)
    .split('')
    .reduce((sum, curr) => sum + +curr, 0);

// My solution (simple fix of original code):
function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += Number(digits[ix]);
  }
  return sum;
}

// Clever user solution:
function getSumOfDigits(integer) {
  return Array.from(String(integer), Number).reduce((a, b) => a + b);
}
