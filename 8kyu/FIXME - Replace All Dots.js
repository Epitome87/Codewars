/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

// My solution:
const replaceDots = (str) => str.replace(/[.]/g, '-');

// Top user solution:
var replaceDots = function (str) {
  // added the \ to escape special characters
  // added the g so that replace is run for all occurences in the string
  return str.replace(/\./g, '-');
};

// Clever user solution, not using Regex:
var replaceDots = (s) => s.split('.').join('-');

/* Takeways:
1) Remember: For replacing characters, rather than replace or replaceAll with Regex, just use the split() method on a string!
*/
