/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

// My solution:
const binToDec = (binary) => parseInt(binary, 2);

// Clever user solution:
const binToDec = (bin) => [...bin].reduce((dec, bit) => (dec << 1) | bit, 0);

// Another clever user solution:
const binToDec = (bin) => [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0);

/* Takeways:
1) Learn formula for binary to decimal!
2) Learn bit manipulation!
*/
