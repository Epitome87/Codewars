/*
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

// My eh solution:
const digits = (num) => {
  const sums = [];
  const nums = [...num.toString()];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sums.push(+nums[i] + +nums[j]);
    }
  }
  return sums;
};

// Clever (albeit hard-to-read) user solution:
function digits(n) {
  return [...('' + n)].reduce((o, x, i, a) => o.concat(a.slice(i + 1).reduce((p, c) => p.concat(+x + +c), [])), []);
}
