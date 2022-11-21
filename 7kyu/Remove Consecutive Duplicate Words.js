/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

// My solution:
const removeConsecutiveDuplicates = (str) =>
  str
    .split(' ')
    .filter((word, idx, s) => word !== s[idx + 1])
    .join(' ');

// Clever user regex solution:
const removeConsecutiveDuplicates = (s) => s.replace(/\b(\w+)\s(?=\1\b)/g, ``);

// Another clever user regex solution:
const removeConsecutiveDuplicates = (s) => s.replace(/(\b\w+)( \1\b)+/g, '$1');
