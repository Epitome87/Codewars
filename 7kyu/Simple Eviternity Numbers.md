# [Simple Eviternity Numbers](https://www.codewars.com/kata/5b93f268563417c7ed0001bd)

## Description

An eviternity number is a number which:

- contains only digits 8, 5 and 3, and
- the count of the digit 8 >= count of digit 5 >= count of digit 3.

The first few eviternity numbers are as follows.

```
[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
```

You will be given two integers, a and b, and your task is to return the number of eviternity numbers in the range >= a and < b.

```
For example:
solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
```

The upper bound will not exceed 500,000.

More examples in test cases. Good luck!

## My Solution

**JavaScript**

```js
const solve = (a, b) => {
  let count = 0;

  for (let i = a; i <= b; i++) {
    const numStr = i.toString();
    if (/[^358]/g.test(numStr)) continue;

    const num8 = (numStr.match(/8/g) || []).length;
    const num5 = (numStr.match(/5/g) || []).length;
    const num3 = (numStr.match(/3/g) || []).length;

    if (num8 >= num5 && num5 >= num3) count++;
  }

  return count;
};
```
