/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates
*/

// My solution:
const solve = (a, b) => {
  const uniqueA = a.split('').map((n) => (!b.includes(n) ? n : ''));
  const uniqueB = b.split('').map((n) => (!a.includes(n) ? n : ''));
  return [...uniqueA, ...uniqueB].join('');
};

// Top user solution:
function solve(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...(a + b)].filter((c) => setA.has(c) ^ setB.has(c)).join('');
}

// Clever user solution:
function solve(a, b) {
  return (a + b)
    .split('')
    .filter((c) => !a.includes(c) || !b.includes(c))
    .join('');
}

/* Takeaways:
1) We can make use of the bitwise XOR operator (^) if we want only one of the conditions to be true. This saves us from having to negate each condition and use an || operator. Example: a ^ b would be the same as !a || !b
*/
