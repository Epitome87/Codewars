/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

// My recursive solution:
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
