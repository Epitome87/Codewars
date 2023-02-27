/*
Task
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

// My solution:
const remove = (str) =>
  str
    .split(' ')
    .map((word) => word.replace(/!+$/, ''))
    .join(' ');

// Top user solution:
const remove = (s) => s.replace(/\b!+/g, '');

// Another good user solution:
function remove(s) {
  return s.replace(/(\w)!+/g, '$1');
}
