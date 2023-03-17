/*
You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
*/

// My refactored solution:
const processData = (data) =>
  data.reduce((acc, curr) => acc * (curr[0] - curr[1]), 1);

// My solution:
const processData = (data) =>
  data.map((x) => x[0] - x[1]).reduce((acc, curr) => acc * curr, 1);

// Clever user solution:
function processData(data) {
  return data.reduce((a, [b, c]) => a * (b - c), 1);
}
