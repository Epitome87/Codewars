/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
*/

// My solution, via Googling Array.from:
const findMultiples = (integer, limit) =>
  Array.from({ length: Math.floor(limit / integer) }, (_, i) => integer * (i + 1));

// Clever user solution:
function findMultiples(int, limit) {
  return Array(Math.floor(limit / int))
    .fill(1)
    .map((x, i) => int * (i + 1));
}

/* Takeways:
1) Remember the Array.from method, and setting its length via an object!
2) Remember Array, and note when you do and don't need to add 'new' in front of it.
3) Remember the Array.fill method.
*/
