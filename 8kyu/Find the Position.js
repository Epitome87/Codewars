/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// My solution:
const position = (letter) =>
  `Position of alphabet: ${letter.charCodeAt(0) - 96}`;

// Top user solution not using charCodeAt:
function position(letter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
