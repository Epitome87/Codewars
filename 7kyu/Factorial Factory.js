/*
*/

// My solution:
const factorial = (n) => (n < 0 ? null : n < 2 ? 1 : factorial(n - 1) * n);