/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

// My solution:
const anagrams = (word, words) => words.filter((w) => w.split('').sort().join('') === word.split('').sort().join(''));

// Clever user solution:
String.prototype.sort = function () {
  return this.split('').sort().join('');
};

function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}

// Good user solution (and how I would do it outside of Codewars):
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function (v) {
    return word == v.split('').sort().join('');
  });
}
