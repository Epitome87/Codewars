/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

// My solution:
const dbSort = (a) => {
  const numsSorted = a.filter((x) => typeof x === 'number').sort((a, b) => a - b);
  const stringsSorted = a.filter((x) => typeof x === 'string').sort((a, b) => a.localeCompare(b));

  return [...numsSorted, ...stringsSorted];
};

// Clever user solution:
const dbSort = (array) => array.sort((a, b) => (typeof a == 'string') - (typeof b == 'string') || (a > b) - (a < b));

/* Takeaways:
1) Remember, the default sort() without specifying a sort function will handle strings correctly!
*/
