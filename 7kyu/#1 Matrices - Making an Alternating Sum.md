# [](https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5)

## Description

We have a matrix of integers with m rows and n columns.

(Math formula could not paste properly; see link for Kata's description!)

As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.

Let's see an example:

```js
matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]

total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8
```

You may be given matrixes with their dimensions between these values: 10 < m < 300 and 10 < n < 300.

More example cases in the Example Test Cases. Enjoy it!!

## My Solution

**JavaScript**

```js
const scoreMatrix = (matrix) => {
  let score = 0;
  matrix.map((e, i) =>
    i % 2
      ? e.map((v, j) => (j % 2 ? (score += v) : (score -= v)))
      : e.map((v, j) => (j % 2 ? (score -= v) : (score += v)))
  );
  return score;
};
```

### User Solution

**JavaScript**

```js
const scoreMatrix = (matrix) =>
  matrix.reduce((pre, val, idx) => pre + val.reduce((p, v, i) => p + (-1) ** (idx + i) * v, 0), 0);
```

```js
function scoreMatrix(matrix) {
  var score = 0;
  for (var i = 1; i <= matrix.length; ++i)
    for (var j = 1; j <= matrix[0].length; ++j) score += Math.pow(-1, i + j) * matrix[i - 1][j - 1];
  return score;
}
```
