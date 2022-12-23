/*
Objective
Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575
*/

// My solution:
const score = (n) => (n > 0 ? parseInt(n.toString(2).replace(/0/g, 1), 2) : 0);

/* Takeaways:
1) I was attempting to reduce the array, like:
const score = (n) => Array.from({ length: n }, (v, i) => i).reduce((acc, curr) => acc | curr, 0)
Not only does this take a very long time to solve, but it did not work for the value of 1.
2) With my updated solution, the logic works using the fact that by the time all Bitwise OR operations are complete, each bit will be a 1. So we essentially just take the input, set all of its bits to 1, and parse that binary as an integer.
*/
