/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// My meh solution:
const reverseSeq = (n) => {
  const result = [];

  for (let i = n; i > 0; i--) {
    result.push(i);
  }

  return result;
};

// Clever user solution:
// const reverseSeq = (n) => {
//   return Array(n)
//     .fill(0)
//     .map((e, i) => n - i);
// };

// Clever user solution:
// const reverseSeq = (length) => Array.from({ length }, () => length--);
