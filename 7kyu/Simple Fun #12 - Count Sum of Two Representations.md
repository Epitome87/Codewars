# [Simple Fun #12: Count Sum of Two Representations](https://www.codewars.com/kata/5884615cbd573356ab000050)

## Description

**Task**

Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

**Example**

For n = 6, l = 2 and r = 4, the output should be 2

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4:

6 = 2 + 4 and 6 = 3 + 3

**Input/Output**

- [input] integer n

A positive integer.

Constraints: 5 ≤ n ≤ 106.

- [input] integer l

A positive integer.

Constraints: 1 ≤ l ≤ r.

- [input] integer r

A positive integer.

Constraints: l ≤ r ≤ 106

- [output] an integer

## My Solution

**JavaScript**

```js
const countSumOfTwoRepresentations = (n, l, r) => {
  let count = 0;
  for (let i = l; i <= r; i++) if (l <= n - i && n - i <= r) count++;
  return Math.ceil(count / 2);
};
```

### User Solution

**JavaScript**

```js
const countSumOfTwoRepresentations = (n, l, r) => Math.max(((Math.min(r, n - l) - Math.max(l, n - r)) / 2 + 1) ^ 0, 0);
```
