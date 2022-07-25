/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

// My VERY MEH solution:
function towerBuilder(nFloors) {
  const floors = [];

  for (let i = 1; i <= nFloors; i++) {
    floors.push(floorBuilder(i, nFloors));
  }

  return floors;
}

function floorBuilder(nthFloor, size) {
  // 2 * iteration - 1 stars
  // 2 * totalFloors - 1 cells each row
  // spaces: [(2 * totalFloors - 1) - (2 * iteration - 1)] / 2
  let width = 2 * size - 1;
  let stars = 2 * nthFloor - 1;
  let spaces = width - stars;

  let floorString = '';

  for (let i = 0; i < spaces / 2; i++) {
    floorString += ' ';
  }

  for (let i = 0; i < stars; i++) {
    floorString += '*';
  }

  for (let i = 0; i < spaces / 2; i++) {
    floorString += ' ';
  }

  return floorString;
}

// Good user solution:
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(' '.repeat(nFloors - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(nFloors - i - 1));
  }
  return tower;
}

// Another good user solution:
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// One-liner user solution:
const towerBuilder = (n) =>
  [...Array(n)].map((_, i) => ' '.repeat(n - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i - 1));
