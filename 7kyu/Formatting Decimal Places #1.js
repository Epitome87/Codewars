/*
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:  
32.8493 is 32.84  
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33
*/

// My solution:
const twoDecimalPlaces = (num) => parseInt(num * 100) / 100;

// Top user solution:
const twoDecimalPlaces = (number) => Math.trunc(number * 100) / 100;

/* Takeaways:
1) Truncating a float to x amount of decimals WITHOUT ROUNDING
seems to be a common question -- learn these algorithms!
*/
