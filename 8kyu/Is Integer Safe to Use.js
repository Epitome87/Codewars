/*
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

// My solution:
const SafeInteger = (n) => n <= Number.MAX_SAFE_INTEGER;

// Top user solution:
var SafeInteger = Number.isSafeInteger;

/* Takeaways:
1) The user solution above sets SafeInteger as an alias to the Number.isSafeInteger function.
We can then call SafeInteger, passing it an Integer (like Number.isSafeInteger requires).
*/
