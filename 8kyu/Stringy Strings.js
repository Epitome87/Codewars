/*
Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

// My solution:
const stringy = (size) => Array.from({ length: size }, (_, i) => ((i + 1) % 2 ? '1' : '0')).join('');

// My alternate solution:
const stringy = (size) => (size % 2 ? '10'.repeat(size / 2) + '1' : '10'.repeat(size / 2));

// Second most clever user solution:
const stringy = (size) => '10'.repeat(size).slice(0, size);

// Third most clever user solution:
const stringy = (x) => ''.padStart(x, '10');

/* Takeways:
1) Note the String.prototype.padStart(targetLength, padString) method!
2) Remember the slice method; it can having to do conditional logic by simply cutting what we don't need.
*/
