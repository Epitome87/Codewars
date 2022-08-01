/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// My solution:
const count = (string) => {
  const characterOccurence = {};

  for (let character of string) {
    characterOccurence[character] ? characterOccurence[character]++ : (characterOccurence[character] = 1);
  }

  return characterOccurence;
};

// User solution:
const count = (string) => [...string].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {});

// User solution:
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

// User solution:
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
