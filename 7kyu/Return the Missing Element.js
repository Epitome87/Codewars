/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/

// My solution:
const getMissingElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
};

// Clever user solution:
function getMissingElement(superImportantArray) {
  return superImportantArray.reduce(function (sum, value) {
    return sum - value;
  }, 45);
}

/* Takeaways:
1) When looking for a missing element among a pre-defined list of elements 
(like 0-9 in this case), we can use clever solutions based on sums!
*/
