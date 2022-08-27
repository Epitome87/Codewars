/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime
 */

// My solution:
const amIWilson = (p) => p === 5 || p === 13 || p === 563;

// Good user solution:
const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;

/* Takeways:
1) Only 3 known Wilson Primes exist, so this solution is valid!
*/
