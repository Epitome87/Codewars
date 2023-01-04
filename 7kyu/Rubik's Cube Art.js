/*
To complete this kata you will have to finish a function that returns a string of characters which when printed resemble a Rubik's cube. The function is named cube, and it has one integer parameter (formal argument) n, for the dimensions of the cube.

For example, when I call the function cube(3) it will return a string which when printed appears as so:

  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
There are no spaces to the right of the cube edges (same above and below the cube), and it must work for all dimensions greater than, or equal to one (technically 1 x 1 x 1):

1 x 1 x 1

/\_\
\/_/
2 x 2 x 2

 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
*/

// My solution:
const cube = (n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(
      `${' '.repeat(n - i - 1)}${'/\\'.repeat(i + 1)}${'_\\'.repeat(n)}`
    );
  }
  for (let i = 0; i < n; i++) {
    res.push(`${' '.repeat(i)}${'\\/'.repeat(n - i)}${'_/'.repeat(n)}`);
  }
  return res.join('\n');
};

// Top user solution:
function cube(n) {
  let rubik = [];
  for (let i = 1; i <= n; i++)
    rubik.push(' '.repeat(n - i) + '/\\'.repeat(i) + '_\\'.repeat(n));
  for (let i = n; i >= 1; i--)
    rubik.push(' '.repeat(n - i) + '\\/'.repeat(i) + '_/'.repeat(n));
  return rubik.join('\n');
}
