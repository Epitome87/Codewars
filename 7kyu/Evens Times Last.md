# [Evens Times Last](https://www.codewars.com/kata/5a1a9e5032b8b98477000004)

## Description

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

## My Solution

**JavaScript**

```js
const evenLast = (nums) => nums.reduce((acc, curr, idx) => (idx % 2 ? acc : acc + curr), 0) * nums.at(-1) || 0;
```

```js
const evenLast = (numbers) =>
  numbers.length
    ? numbers.reduce((sum, curr, idx) => (idx % 2 === 0 ? sum + curr : sum), 0) * numbers[numbers.length - 1]
    : 0;
```
