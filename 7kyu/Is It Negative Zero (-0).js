/*
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/

// My solution:
const isNegativeZero = (n) => Object.is(n, -0);

// Unique user solution:
const isNegativeZero = (n) => 1 / Math.sign(n) === -Infinity;

/* Takeaways:
1) Remember the Math.sign(int) method! Returns -1 or 1 depending on if a num is negative or positive.
It returns 0 if the number is 0 (+0 or -0).
2) Yet for some reason only when we do 1 / Math.sign(-0) can we detect a negative (if it equals -Infinity).
*/
