/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

Vowel consonant lexicon
*/

// My solution:
const dup = (s) =>
  s.map((str) =>
    [...str].reduce(
      (acc, curr, idx, arr) => (curr !== arr[idx + 1] ? acc + curr : acc),
      ''
    )
  );

// Top user solution:
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, '$1'));
}
