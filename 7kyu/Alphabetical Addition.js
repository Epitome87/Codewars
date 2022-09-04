/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here
*/

// My solution:
const addLetters = (...letters) => {
  if (letters.length === 0) return 'z';

  const val =
    letters.reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0) % 26;
  return val === 0 ? 'z' : String.fromCharCode(val + 96);
};

// Top user solution:
function addLetters(...letters) {
  return String.fromCharCode(
    ((letters.reduce((a, b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26) + 97
  );
}

// Good user solution:
function addLetters(...letters) {
  const alpha = 'zabcdefghijklmnopqrstuvwxy';
  const sum =
    letters.reduce((sum, letter) => sum + alpha.indexOf(letter), 0) % 26;
  return alpha[sum];
}

/* Takeaways:
1) Take note of the variuos user approaches to solve for overflows.
One user adds 25 (n - 1) before he does the modulus (of n) to account appropriately for overflow.
The other user takes a unique approach by retrieving values by their 0-based index.
*/
