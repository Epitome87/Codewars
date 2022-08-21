/*
 */

// My eh solution:
const solution = (str) => {
  const res = [];

  for (let i = 0; i < str.length; i += 2) {
    res.push(str.substr(i, 2));
  }

  if (str.length % 2) res[Math.floor(str.length / 2)] += '_';

  return res;
};

// Top user solution:
function solution(s) {
  return (s + '_').match(/.{2}/g) || [];
}

/* Takeways:
1) As always, learn Regex!
2) Think more carefully about how to simplify the solution. Instead of figuring out the last index of an odd-numbered string and adding '_' at the end of the algorithm, we could have simply added it to the end of the string to begin with.
*/
