/*
Given two numbers m and n, such that 0 ≤ m ≤ n :

convert all numbers from m to n (inclusive) to binary
sum them as if they were in base 10
convert the result to binary
return as a string
Example
1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010
*/

// My one-liner solution:
const binaryPyramid = (m, n) =>
  Array.from({ length: n - m + 1 }, (_, i) => m + i)
    .reduce((acc, curr) => acc + +curr.toString(2), 0)
    .toString(2);

// My original solution:
const binaryPyramid = (m, n) => {
  let sum = 0;
  for (let i = m; i <= n; i++) {
    const binary = i.toString(2);
    sum += +binary;
  }
  return sum.toString(2);
};

// Clever user solution:
function BinaryPyramid(m, n) {
  return [...Array(n - m + 1)]
    .reduce((a, b, i) => a + +(m + i).toString(2), 0)
    .toString(2);
}
