/*
Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.

Examples
Array [4, 8, 2, 7, 5] after processing with function

var myArray = [4, 8, 2, 7, 5];
myArray = processArray(myArray,function (a) {
  return a * 2;
});
will be [ 8, 16, 4, 14, 10 ].

Array [7, 8, 9, 1, 2] after processing with function

var myArray = [7, 8, 9, 1, 2];
myArray = processArray(myArray, function (a) {
  return a + 5;
});
will be [ 12, 13, 14, 6, 7 ].
*/

// My solution:
const processArray = (arr, callback) => arr.map(callback);

// My solution (not relying on map):
const processArray = (arr, callback) => {
  const res = [];
  for (let item of arr) {
    res.push(callback(item));
  }
  return res;
};
