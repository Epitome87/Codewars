/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

// My second-attempt solution:
const sumOfDifferences = (arr) => {
  if (!arr || arr.length < 2) return 0;
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[0] - sorted[sorted.length - 1];
};

// My first-solution:
const sumOfDifferences = (arr) => {
  if (arr.length <= 1) return 0;

  const sorted = [...arr].sort((a, b) => b - a);
  const differences = sorted.map((n, i, arr) => n - arr[i + 1], 0).slice(0, -1);
  const sum = differences.reduce((acc, curr) => acc + curr, 0);

  return sum;
};

// Very clever user solution:
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Good user solution, similar to mine:
const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);

/* Takeaways:
1) Always look for mathematical solutions! 
If you have the array [a,b,c] (already sorted in descending order), then the solution would be (a-b)+(b-c) = a-c+b-b = a-c.
All elements other than the maximum and minimum get canceled out.
*/
