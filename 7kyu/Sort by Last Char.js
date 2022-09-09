/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

// My solution:
const last = (x) =>
  x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

// Top user solution:
function last(x) {
  return x
    .split(' ')
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

// Another good user solution:
const last = ($) => $.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1));

/* Takeaways:
1) Easy way to sort two strings is to use strA.localCompare(strB)
2) Another way to compare them in the sort() method is to do a > b, rather than a - b (which is not valid on Strings).
*/
