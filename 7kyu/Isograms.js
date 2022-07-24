/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// My eh solution:
const isIsogram = (str) => {
  const stringLowercased = str.toLowerCase();
  const usedLetters = {};

  for (let letter of stringLowercased) {
    if (usedLetters[letter]) return false;
    else usedLetters[letter] = true;
  }

  return true;
};

// Very clever user solution!
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
