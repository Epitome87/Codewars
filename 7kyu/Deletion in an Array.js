/*
The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?

Original code:
function deleteValues(array, pred) {
  for (var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1);
    }
  }
  return array;
}
*/

// My solution:
const deleteValues = (array, pred) => {
  for (let i = 0; i < array.length; i++) if (pred(array[i])) array.splice(i--, 1);
  return array;
};

// Clever user solution:
function deleteValues(array, pred) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

/* Takeaways:
1) When using the slice method on an array you are iterating through in a for-loop (using its length as an ending point, for example) you must decrement the loop increment variable after a successful slice. This is because we need to adjust for the new index of the next location, which is now i rather than i + 1.
2) We can also just iterate from arr.length - 1, loop while i >= 0, and decrement i each iteration.
*/
