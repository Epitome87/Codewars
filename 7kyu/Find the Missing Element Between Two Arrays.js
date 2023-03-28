/*
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

// My solution:
const findMissing = (arr1, arr2) => {
  const sortedArr1 = [...arr1].sort((a, b) => a - b);
  const sortedArr2 = [...arr2].sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) return sortedArr1[i];
  }
};

// Clever user solution:
function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}

/* Takeaways:
1) When finding what's missing between two arrays, we can simply find the difference (literally, by subtracting the sum of one array by the other)!
*/
