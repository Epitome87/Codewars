/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
This kata inspired by Sort rectangles and circles by area.
*/

// My solution:
const sortByArea = (arr) => {
  const area = (x) => (Array.isArray(x) ? x[0] * x[1] : Math.PI * x * x);
  return [...arr].sort((a, b) => area(a) - area(b));
};
