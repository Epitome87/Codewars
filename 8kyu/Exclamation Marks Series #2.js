/*
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

// My refactored solution:
const remove = (str) => str.replace(/!+$/, '');

// My original solution:
const remove = (str) => {
  while (str.lastIndexOf('!') === str.length - 1) {
    str = str.slice(0, -1);
  }
  return str;
};
