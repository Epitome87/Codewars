/*
In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
More info: https://en.wikipedia.org/wiki/Geometric_progression
*/

// My solution:
const geometricSequenceElements = (a, r, n) => Array.from({ length: n }, (_, i) => a * Math.pow(r, i)).join(', ');

// Similar user solution:
const geometricSequenceElements = (a, r, n) => [...Array(n)].map((_, idx) => a * r ** idx).join(`, `);

/* Takeaways:
1) Remember, [...Array(n)].map((_, idx) => {}) can achieve the same thing as Array.from({ length: n}, (_, idx) => {})
*/
