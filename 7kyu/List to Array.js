/*
Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}
Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.
*/

// My solution:
const listToArray = (list) => {
  const arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  return arr;
};

// Top user solution:
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next) array.push(node.value);
  return array;
}

// Another clever user solution:
const listToArray = (list) => (list == null ? [] : [list.value].concat(listToArray(list.next)));

/* Takeaways:
1) Note the atypical logic inside the user's for-loop. We initialize a variable 'node' to list, the condition expression is simply 'node', meaning we iterate until node is not truthy. Finally, the increment expression is node = node.next.
*/
