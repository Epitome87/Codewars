/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// My solution. Solved relatively quick, but it feels pretty lucky!
const reverseWords = (str) =>
  str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
