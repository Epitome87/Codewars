/*
Hit the target
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', ' ', ' ', ' '], --> return true

  [' ', '>', ' ', 'x'],

  [' ', ' ', ' ', ' ']

] 
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', '>', ' ', ' '], --> return false

  [' ', ' ', ' ', 'x'],

  [' ', ' ', ' ', ' ']

] 
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', 'x', '>', ' '], --> return false

  [' ', '', ' ', ' '],

  [' ', ' ', ' ', ' ']

] 

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say!
*/

// My solution:
const solution = (mtrx) => mtrx.some((x) => />.*x/.test(x));

// Good non-Regex user solution:
function solution(xs) {
  const x = xs.find((x) => x.includes('>'));
  return x.indexOf('x') > x.indexOf('>');
}

/* Takeaways:
1) Try to make more use of the Array.prototype.find() method!
The find() method returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.
It seems especially useful if it is an array of arrays, so we can find the array where a condition is true.
*/
