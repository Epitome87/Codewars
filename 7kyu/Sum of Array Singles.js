/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
*/

// My eh solution:
const repeats = (arr) => {
  const counts = {};

  for (let el of arr) {
    if (counts[el]) counts[el] = counts[el] + 1;
    else counts[el] = 1;
  }

  const singles = Object.keys(counts).filter((n) => counts[n] === 1);

  return singles.reduce((sum, curr) => sum + +curr, 0);
};

// Top user solution:
function repeats(arr) {
  return arr
    .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}

/* Takeaways:
1) Object.keys(obj) returns a string.
2) Yet again, remember: We can check for uniques by seeing if arr.indexOf(el) === arr.lastIndexOf(el).
*/
