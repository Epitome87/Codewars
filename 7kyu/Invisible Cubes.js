/*
Imagine there's a big cube consisting of n^3 small cubes. Calculate, how many small cubes are not visible from outside.

For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)

For a visual representation: --> https://imgur.com/a/AN8A5DJ
*/

// My solution:
const notVisibleCubes = (n) => (n <= 2 ? 0 : (n - 2) ** 3);

// Top user solution:
const notVisibleCubes = (n) => Math.pow(Math.max(n - 2, 0), 3);
