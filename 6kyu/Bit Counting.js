/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My solution:
const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .filter((m) => m === '1').length;

// Clever user solution:
countBits = (n) => n.toString(2).split('0').join('').length;

/* Takeways:
1) Remember: A string representation of an integer can be converted to binary with .toString(2) 
2) I keep forgetting this clever use of .split() in the user solution! 
*/
