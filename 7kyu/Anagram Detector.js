/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// My eh solution:
const isAnagram = (test, original) => {
  if (test.length !== original.length) return false;

  let lowerTest = test.toLowerCase();
  let lowerOriginal = original.toLowerCase();

  for (let i = 0; i < original.length; i++) {
    if (lowerTest.includes(lowerOriginal[0])) {
      lowerTest = lowerTest.replace(lowerOriginal[0], '');
      lowerOriginal = lowerOriginal.replace(lowerOriginal[0], '');
    } else return false;
  }

  return true;
};

// Clever user solution:
// write the function isAnagram
var isAnagram = function (test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return t == o ? true : false;
};

// Clever user solution:
function isAnagram(test, original) {
  return (
    test.toLowerCase().split('').sort().join('') ===
    original.toLowerCase().split('').sort().join('')
  );
}
