/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

// My solution:
const generateShape = (integer) => ('+'.repeat(integer) + '\n').repeat(integer).slice(0, -1);

// Top user solution (similar to mine, but using trim):
function generateShape(n) {
  return ('+'.repeat(n) + '\n').repeat(n).trim();
}
