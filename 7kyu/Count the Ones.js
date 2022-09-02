/*
The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3
The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)
*/

// My solution (with outside research):
const hammingWeight = (x) => (x ? (x % 2) + hammingWeight(x >> 1) : x);

// Solution if the author didn't prevent the use of String operations:
const hammingWeight = (x) =>
  x
    .toString(2)
    .split('')
    .reduce((acc, curr) => (curr === '1' ? acc + 1 : acc)).length;

/* Takeaways:
1) Learn bit operations!
*/
