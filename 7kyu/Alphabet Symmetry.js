/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

// My solution:
const solve = (arr) => {
  return arr.map((str) => {
    return str
      .split('')
      .reduce(
        (acc, curr, index, a) =>
          curr.toLowerCase().charCodeAt(0) - 96 === index + 1 ? acc + 1 : acc,
        0
      );
  });
};

// Top user solution:
function solve(arr) {
  var alphabeth = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(
    (x) =>
      x
        .toLowerCase()
        .split('')
        .filter((y, i) => i == alphabeth.indexOf(y)).length
  );
}

// Good user solution:
function solve(arr) {
  return arr.map((x) =>
    [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0)
  );
}

/* Takeaways:
1) Remember to do operations like toLowerCase on the entire string when possible, rather than on each letter.
*/
