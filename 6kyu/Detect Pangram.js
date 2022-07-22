/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// My solution:
const isPangram = (string) => {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!string.includes(char)) return false;
  }

  return true;
};

// My attempt at a "clever" (but not elegant) solution:
// const isPangram = (string) => "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, curr) => acc && string.toLowerCase().includes(curr), true);

// My favorite user solution (though I'd covert to a one-line arrow function!):
// function isPangram(string) {
//   return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => string.toLowerCase().includes(x));
// }
