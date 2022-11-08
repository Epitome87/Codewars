/*
args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

Write a function that returns the number of arguments passed.
*/

// My solution:
function args_count() {
  return arguments.length;
}

// Alternate solution:
const args_count = (...args) => args.length;

/* Takeaways:
1) Note that "arguments" isn't available using arrow syntax!
*/
