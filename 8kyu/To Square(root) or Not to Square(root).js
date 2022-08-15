/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

// My solution:
const squareOrSquareRoot = (array) => array.map((n) => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2));

// Shortest user solution:
const squareOrSquareRoot = ($) => $.map((el) => (el ** 0.5 % 1 ? el * el : el ** 0.5));

/* Takeways:
1) Remember, a shorter way to test if a number is a square root is to see if Math.sqrt(n) % 1 === 0 (i.e an Integer)
*/
