/*
Write a function generateIntegers/generate_integers that accepts a single argument n/$n and generates an array containing the integers from 0 to n/$n inclusive.

For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].

n/$n can be any integer greater than or equal to 0.
*/

// My solutions:
const generateIntegers = (n) => Array.from({ length: n + 1 }, (_, i) => i);
const generateIntegers = (n) => [...Array(n + 1)].map((_, idx) => idx);

// Top user solution:
let generateIntegers = (n) => [...Array(n + 1).keys()];

/* Takeaways:
1) Don't forget about the .keys() method on an Array object! Note it ONLY works when
done like [...Array(n).keys()] -- cannot be done on an array literal?
*/
