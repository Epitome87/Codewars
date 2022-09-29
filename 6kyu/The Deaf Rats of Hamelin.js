/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

// My solution:
const countDeafRats = (town) => {
  const [left, right] = town.replace(/[ ]/g, '').split('P');

  const leftRats = Array.from({ length: left.length / 2 }, (_, i) =>
    left.slice(i * 2, i * 2 + 2)
  );
  const rightRats = Array.from({ length: right.length / 2 }, (_, i) =>
    right.slice(i * 2, i * 2 + 2)
  );

  const numDeafLeft = leftRats.reduce(
    (acc, curr) => (curr === 'O~' ? acc + 1 : acc),
    0
  );
  const numDeafRight = rightRats.reduce(
    (acc, curr) => (curr === '~O' ? acc + 1 : acc),
    0
  );

  return numDeafLeft + numDeafRight;
};

// Good user solution:
var countDeafRats = function (town) {
  if (town != null) {
    [left, right] = town.split('P');
    var a = left + right.split('').reverse().join('');
    var b = (a.match(/O~|~O/gi) || []).filter((v) => v == 'O~').length;
    return b;
  }
  return 0;
};

// Clever user solution:
var countDeafRats = function (town) {
  return [...town.replace(/ +/g, '')].reduce(
    (a, c, i) => a + (i % 2 == 0 && c == 'O'),
    0
  );
};

// Clever user solution:
var countDeafRats = function (town) {
  const [a, b] = town.split('P');
  const l = (a.match(/(?<=^|\s|O)(O~)+/g) || []).join('').length / 2;
  const r = (b.match(/(?<=^|\s|~)(~O)+/g) || []).join('').length / 2;
  return l + r;
};
