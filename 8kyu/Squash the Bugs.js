/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

// My solution:
function findLongest(str) {
  const spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) longest = spl[i].length;
  }
  return longest;
}

// "Top" user solution (Note: This challenge was to modify EXISTING code to work properly, so although this solution is more clever, it doesn't really satisfy the spirit of the challenge):
const findLongest = (s) => Math.max(...s.split(' ').map((x) => x.length));
