/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!

If you like this Kata, please try:

Sum of integer combinations

Sum of array singles
*/

// My solution:
const solve = (arr) => arr.reduce((acc, curr) => acc * [...new Set(curr)].length, 1);

// My favorite user solution:
const solve = (arr) => arr.reduce((res, a) => res * new Set(a).size, 1);

/* Takeaways:
1) Remember the correct syntax to form an array from a Set:
[...new Set(arr)]
2) Since we aren't running any Array methods on the Set we are creating, we do not need to convert it to an Array, and can instead do: Set(arr).size to get the size of a Set rather than the length of an Array formed from a Set!
*/
