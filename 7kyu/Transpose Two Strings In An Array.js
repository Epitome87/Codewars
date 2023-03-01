/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/

// My one-line solution:
const transposeTwoStrings = (arr) =>
  Array.from(
    { length: Math.max(arr[0].length, arr[1].length) },
    (v, i) => `${arr[0][i] || ' '} ${arr[1][i] || ' '}`
  ).join('\n');

// My solution:
const transposeTwoStrings = (arr) => {
  let res = [];
  for (let i = 0; i < Math.max(arr[0].length, arr[1].length); i++) {
    res.push((arr[0][i] || ' ') + ' ' + (arr[1][i] || ' '));
  }
  return res.join('\n');
};
