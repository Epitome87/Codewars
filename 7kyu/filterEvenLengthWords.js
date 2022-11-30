/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']
*/

// My solution:
const filterEvenLengthWords = (words) =>
  words.filter((word) => word.length % 2 === 0);

// Clever user solution:
function filterEvenLengthWords(words) {
  return words.filter(function (word) {
    return !(word.length & 1);
  });
}

/* Takeaways:
1) word.length & 1 appears to check if a number is odd (so we negate the result). 
This will be useful for a less verbose way of checking parity!
*/
