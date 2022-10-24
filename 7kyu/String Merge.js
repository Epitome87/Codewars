/*
*/

// My solution:
const stringMerge = (string1, string2, letter) =>
  string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));