/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// a: 97,

// My not-so-great solutioN:
function high(x) {
  const words = x.split(' ');

  let highestCount = 0;
  let highestWord = '';

  for (let i = 0; i < words.length; i++) {
    let count = words[i].split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
    if (count > highestCount) {
      highestWord = words[i];
      highestCount = count;
    }
  }

  return highestWord;
}

// A top user solution:
function high(s) {
  let as = s.split(' ').map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
