/*
Debug the functions
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

Starting (buggy) code:
function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}
*/

// My solution:
const multi = (arr) => arr.reduce((product, curr) => product * curr, 1);
const add = (arr) => arr.reduce((sum, curr) => sum + curr, 0);
const reverse = (str) => [...str].reverse().join('');
