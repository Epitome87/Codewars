/*
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

// My solution:
const catchSignChange = (arr) =>
  arr
    .slice(0, -1)
    .reduce((count, curr, idx) => (Math.sign(curr || 1) !== Math.sign(arr[idx + 1] || 1) ? count + 1 : count), 0);

// My other solution:
const catchSignChange = (arr) =>
  arr.reduce(
    (count, curr, idx) => ((curr >= 0 && arr[idx + 1] < 0) || (curr < 0 && arr[idx + 1] >= 0) ? count + 1 : count),
    0
  );

// My other solution (after seeing the below user solution):
const catchSignChange = (arr) => arr.slice(1).reduce((acc, curr, i) => (curr < 0 !== arr[i] < 0 ? acc + 1 : acc), 0);

// Clever user solution:
function catchSignChange(arr) {
  return arr.slice(1).filter((e, i) => e < 0 !== arr[i] < 0).length;
}

/* Takeaways:
1) Although perhaps not as "clever", consider taking the length of the filter function rather than using reduce (when appropriate).
*/
