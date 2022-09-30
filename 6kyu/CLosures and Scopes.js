/*
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
*/

// My solution:
const createFunctions = (n) => Array.from({ length: n }, (_, i) => () => i);

// Top user solution:
function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

// Good user solution:
const createFunctions = (n) => [...Array(n)].map((_, idx) => () => idx);

/* Takeaways:
1) This kata was basically to teach closures, and how declaring the i in the for-loop with 'var' was an issue! In modern JavaScript, this issue would immediately be avoided, as we don't use var.
*/
