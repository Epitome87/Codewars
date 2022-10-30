/*
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

// My solution:
function last(list) {
  if (arguments.length > 1) return arguments[arguments.length - 1];
  if (typeof list === 'object' || typeof list === 'string') return list[list.length - 1];
  return list;
}

// Top user solution (apparently doesn't work with some edge cases, though):
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

// My favorite user solution:
function last(first, ...rest) {
  if (rest.length) return rest.pop();
  if (first.length) return [...first].pop();
  return first;
}

/* Takeaways:
1) It appears the arguments object is not available when using arrow functions?!
*/
