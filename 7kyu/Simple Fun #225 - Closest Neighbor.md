# [Simple Fun #225: Closest Neighbor](https://www.codewars.com/kata/5902fbd2378a92a990000083)

## Description

**Task**

Given a number `n`, find the largest integer below `n` and the smallest integer above `n` that are divisible by `a, b, and c`.

**Input/Output**

`[input]` integer `n`

A positive integer.

`10 ≤ n ≤ 3 * 10^5`

`[input]` integer `a,b,c`

`1 ≤ a ≤ b ≤ c ≤ 100`

`[output]` an integer array

Array of two integers, the first integer is the largest number less than n and divisible by a, b and c, and the second one is the smallest number greater than n and divisible by a, b ans c.

**Example**

For `n = 20, a = 2, b = 3, c = 4`, the output should be `[12, 24]`

## My Solution

**JavaScript**

```js
const closestNeighbor = (n, a, b, c) => {
  const result = [];

  for (let i = n - 1; i > 0; i--) {
    if (i % a === 0 && i % b === 0 && i % c === 0) {
      result.push(i);
      break;
    }
  }

  for (let i = n + 1; ; i++) {
    if (i % a === 0 && i % b === 0 && i % c === 0) {
      result.push(i);
      break;
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function closestNeighbor(n, a, b, c) {
  let mn = n,
    mx = n;
  while (mn % a || mn % b || mn % c) mn--;
  while (mx % a || mx % b || mx % c) mx++;
  return [mn, mx];
}
```
