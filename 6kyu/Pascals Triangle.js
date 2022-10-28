/*
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}( 
k
n
​
 )= 
k!(n−k)!
n!
​
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.
*/

// My solution:
const pascalsTriangle = (n) => {
  if (n === 0) return [];
  if (n === 1) return [1];

  let res = [];

  for (let row = 1; row <= n; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) arr.push(1);
      else arr.push(res[row - 2][col - 1] + res[row - 2][col]);
    }
    res.push(arr);
  }

  return res.flat();
};

// Top user solution:
function pascalsTriangle(n) {
  var pascal = [];
  var idx = 0;

  for (var i = 0; i < n; i++) {
    idx = pascal.length - i;
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        pascal.push(1);
      } else {
        pascal.push(pascal[idx + j] + pascal[idx + j - 1]);
      }
    }
  }

  return pascal;
}
