/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// My solution:
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);

// Clever (though modified the function signature) user solution:
// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}
