/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

// My solution:
const capitalize = (s) =>
  s
    .split('')
    .reduce(
      (acc, curr, idx) =>
        (idx + 1) % 2
          ? [acc[0] + curr.toUpperCase(), acc[1] + curr.toLowerCase()]
          : [acc[0] + curr.toLowerCase(), acc[1] + curr.toUpperCase()],
      ['', '']
    );

// My refactored solution (paying more attention to the fact that input is always all lowercase!):
const capitalize = (s) =>
  s
    .split('')
    .reduce(
      (acc, curr, idx) =>
        (idx + 1) % 2 ? [acc[0] + curr.toUpperCase(), acc[1] + curr] : [acc[0] + curr, acc[1] + curr.toUpperCase()],
      ['', '']
    );

// Best readable user solution:
function capitalize(s) {
  const odd = s
    .split('')
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join('');
  const even = s
    .split('')
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join('');
  return [even, odd];
}

// Another good readable user solution:
function capitalize(s) {
  return [
    [...s].map((x, i) => (i % 2 == 0 ? x.toUpperCase() : x)).join(''),
    [...s].map((x, i) => (i % 2 != 0 ? x.toUpperCase() : x)).join(''),
  ];
}

// Most clever user solution:
function capitalize(s) {
  return [0, 1].map((r) => [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join(''));
}
