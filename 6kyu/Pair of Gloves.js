/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

// My solution:
const numberOfPairs = (gloves) => {
  const gloveCount = {};

  for (let glove of gloves) {
    gloveCount[glove] = gloveCount[glove] ? gloveCount[glove] + 1 : 1;
  }

  return Object.values(gloveCount).reduce(
    (sum, curr) => sum + Math.floor(curr / 2),
    0
  );
};

// Good user solution:
function numberOfPairs(gloves) {
  var pairs = 0,
    counts = {};

  for (var color of gloves) {
    if (!counts.hasOwnProperty(color)) counts[color] = 0;

    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }
  }

  return pairs;
}
