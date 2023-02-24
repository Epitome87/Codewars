/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

// My solution:
const testit = (a, b) =>
  [...a.filter((n, i, arr) => arr.indexOf(n) === i), ...b.filter((n, i, arr) => arr.indexOf(n) === i)].sort(
    (a, b) => a - b
  );

// Top user solution:
function testit(a, b) {
  return [...new Set(a), ...new Set(b)].sort((a, b) => a - b);
}

/* Takeaways:
1) Essentially, by looking at the test cases (and the name of the Kata), we can determine that we take the two input arrays, ignore values that have already occured, combine the two filtered arrays together, and sort them.
2) Don't forget to make use of Sets!
*/
