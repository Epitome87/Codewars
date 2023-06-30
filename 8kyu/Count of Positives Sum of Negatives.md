# [Count of Positives / Sum of Negatives](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)

## Description

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

**Example**

For input `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]`, you should return `[10, -65]`.

## My Solution

**JavaScript**

```js
const countPositivesSumNegatives = (input) =>
  input && input.length
    ? input.reduce((acc, curr) => (curr > 0 ? [acc[0] + 1, acc[1]] : curr < 0 ? [acc[0], acc[1] + curr] : acc), [0, 0])
    : [];
```

```js
const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) return [];

  const countOfPositives = input.filter((num) => num > 0).length;
  const sumOfNegatives = input.filter((num) => num < 0).reduce((acc, curr) => acc + curr, 0);

  return [countOfPositives, sumOfNegatives];
};
```
