/*
Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example
array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]

Good luck!
*/

// My less-fancy, faster solution:
const solve = (a, b) => {
  const map = {};
  for (let el of a) {
    map[el] = 1 + (map[el] || 0);
  }
  return b.map((n) => (n in map ? map[n] : 0));
};

// My original solution:
const solve = (a, b) =>
  b.map((x) => a.reduce((acc, curr) => (curr === x ? acc + 1 : acc), 0));

// Top user solution:
const solve = (a, b) => b.map((x) => a.filter((n) => n === x).length);

/* Takeaways:
1) In many situations, filtering and checking the length of the result
can be less verbose than reducing!
*/
