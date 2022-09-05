/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */

// My solution:
function isSortedAndHow(array) {
  const arrayJSON = JSON.stringify(array);
  const sortedAsc = JSON.stringify([...array].sort((a, b) => a - b));
  const sortedDesc = JSON.stringify([...array].sort((a, b) => b - a));

  return arrayJSON == sortedAsc ? 'yes, ascending' : arrayJSON == sortedDesc ? 'yes, descending' : 'no';
}

// Top user solution:
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';
}

// User solution similar to the above, but without the OR operator:
const isSortedAndHow = (array) =>
  array.slice(1).every((val, idx) => val >= array[idx])
    ? `yes, ascending`
    : array.slice(1).every((val, idx) => val <= array[idx])
    ? `yes, descending`
    : `no`;

// Clever user solution (though this didn't seem to work for me?):
const isSortedAndHow = (a) => {
  const s = a.join``;
  return s === a.sort((x, y) => x - y).join``
    ? 'yes, ascending'
    : s === a.sort((x, y) => y - x).join``
    ? 'yes, descending'
    : 'no';
};

/* Takeaways:
1) Look into the join`` syntax the last user solution used! The .join() method converts to a string, so we can then check for equality (since we can't with an array). But why / how can w can join with `` instead of ()?
Note: The use of `` to call a function is called "Tagged templates"
*/
