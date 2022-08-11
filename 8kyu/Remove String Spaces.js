/*
Simple, remove the spaces from the string, then return the resultant string.
*/

// My solution:
const noSpace = (x) => x.split(' ').join('');

// Top user solution:
function noSpace(x) {
  return x.replace(/\s/g, '');
}

// Takeways: Learn Regex! Why can't we do x.trim()?!
