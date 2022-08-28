/*
Task
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be true;

For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be false.

Input/Output
[input] 2D integer array shoes
Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
*/

// My eh solution:
const pairOfShoes = (shoes) => {
  const left = shoes.filter((shoe) => shoe[0] === 0).sort((a, b) => a[1] - b[1]);
  const right = shoes.filter((shoe) => shoe[0] === 1).sort((a, b) => a[1] - b[1]);

  if (left.length !== right.length) return false;

  for (let i = 0; i < left.length; i++) {
    if (left[i][1] !== right[i][1]) return false;
  }

  return true;
};

// Top user solution:
const pairOfShoes = (shoes) =>
  Object.values(shoes.reduce((pre, val) => ((pre[val[1]] = (pre[val[1]] || 0) + (val[0] || -1)), pre), {})).every(
    (val) => !val
  );

/* Takeaways:
1) I don't understand the top user solution :'(
*/
