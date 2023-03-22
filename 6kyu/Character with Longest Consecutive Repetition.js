/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

// My solution:
const longestRepetition = (s) => {
  if (!s) return ['', 0];
  const matches = s.match(/(.)\1*/g).map((n) => [n[0], n.length]);
  const sorted = matches.sort((a, b) => b[1] - a[1]);
  return sorted[0];
};

const longestRepetition = (s) =>
  !s
    ? ['', 0]
    : s
        .match(/(.)\1*/g)
        .reduce(
          (acc, curr) => (curr.length > acc[1] ? [curr[0], curr.length] : acc),
          ['', 0]
        );

// Top user solution:
function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';

  return s
    .toLowerCase()
    .split('')
    .reduce(
      (acc, curr) => {
        if (curr === prevLetter) {
          count++;
        } else {
          count = 1;
        }

        if (count > acc[1]) {
          acc[1] = count;
          acc[0] = curr;
        }

        prevLetter = curr;
        return acc;
      },
      ['', 0]
    );
}
