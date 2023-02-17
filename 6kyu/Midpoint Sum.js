/*
Midpoint Sum
For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

Ex:

ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc (depending on the language) as there
# are no indices where the left and right sums are equal
Here are the 2 important rules:

The element at the index to be returned is not included in either of the sum calculations!
Both the first and last index cannot be considered as a "midpoint" (So None for [X] and [X, X])
*/

// My solution:
const midpointSum = (arr) => {
  const sum = (a) => a.reduce((acc, curr) => acc + curr, 0);

  for (let i = 1; i < arr.length - 1; i++) {
    const leftSide = arr.slice(0, i);
    const rightSide = arr.slice(i + 1);
    if (sum(leftSide) === sum(rightSide)) return i;
  }
};


// Top user solution:
function midpointSum(arr) {
  var n = arr.length;

  // No midpoint
  if (n < 3) return void 0;

  var sum = 0;
  var mid = arr[0];

  // Compute sum only once
  for (var i = 0; i < n; i++) {
    sum += arr[i];
  }

  // Compute sums of left and right parts
  for (var i = 1; i < n - 1; i++) {
    var cur = arr[i];
    if (mid === sum - mid - cur) return i;
    mid += arr[i];
  }

  return void 0;
}