/*
Task
In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output. In other words, for every x from the set of inputs there is exactly one element y from the set of outputs, such that the ordered pair (x, y) is contained in the set defining the function.

You are given a set of pairs that defines something. Your task is to figure out whether this something can be a function or not.

Input/Output
[input] 2D float array pairs
A non-empty set of pairs. Each pair is given as a two-element array, where the first element belongs to the set of inputs, and the second one belongs to the set of outputs.

[output] a boolean value
true if the given set can define a function and false otherwise.

Example
For pairs = [[0.5,1.5],[2.5,3.5]], the output should be true.

For pairs = [[5,1],[2.5,3.4],[5,6],[7,2]], the output should be false.

The given set can't possibly define a function, since values y = 1 and y = 6 both correspond to the value x = 5.
*/

// My solution:
const isFunction = (pairs) =>
  new Set(pairs.map(([x, y]) => x)).size === new Set(pairs.map(String)).size;

// Good user solution:
function isFunction(pairs) {
  const seen = {};
  for (const [x, y] of pairs) {
    if (seen.hasOwnProperty(x) && seen[x] != y) return false;
    seen[x] = y;
  }
  return true;
}

/* Takeaways:
1) If the array of pairs has the same x value more than once, it cannot be a function...
UNLESS its corresponding y-value is the same each time. This is why the
second Set is necessary. In it, we basically remove any repeated x/y pairs.
*/
