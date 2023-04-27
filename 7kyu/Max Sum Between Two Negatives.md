# [Max Sum Between Two Negatives](https://www.codewars.com/kata/6066ae080168ff0032c4107a)

## Description

**Task**

You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell, None for Rust.

**Example**

```
[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
```

Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

## My Solution

**JavaScript**

```js
function maxSumBetweenTwoNegatives(a) {
  if (a.filter((el) => el < 0).length < 2) return -1;

  const startIndex = a.findIndex((el) => el < 0);
  let currentSum = 0;
  let maxSum = 0;

  for (let i = startIndex; i < a.length; i++) {
    if (a[i] < 0) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = 0;
    } else {
      currentSum += a[i];
    }
  }

  return maxSum;
}
```

### User Solution

**JavaScript**

```js
function maxSumBetweenTwoNegatives(a) {
  let i = 0,
    c = 0,
    m = -1;
  while (i < a.length && a[i] >= 0) i++;
  while (++i < a.length) {
    if (a[i] < 0) {
      m = m < c ? c : m;
      c = 0;
    } else c += a[i];
  }
  return m;
}
```
