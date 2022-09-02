/*
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
*/

// My solution:
function countingValleys(s) {
  let level = 0;
  let valleys = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'U' && level === -1) valleys++;
    if (s[i] === 'U') level++;
    else if (s[i] === 'D') level--;
  }

  return valleys;
}

// User solution with slightly different approach:
const moves = { U: 1, D: -1, F: 0 };

const countingValleys = (s) => {
  let position = (valleys = 0);

  Array.from(s).forEach((char) => {
    position += moves[char];
    valleys += position === 0 && moves[char] === 1;
  });

  return valleys;
};
