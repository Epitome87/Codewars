# [Beginner Series #3 - Sum of Numbers](https://www.codewars.com/kata/55f2b110f61eb01779000053)

## Description

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

**Examples (a, b) --> output (explanation)**

```
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
```

## My Solution

**JavaScript**

```js
const gitSum = (a, b) => ((Math.abs(a - b) + 1) * (a + b)) / 2;
```

```js
const getSum = (a, b) => {
  if (a === b) return a;

  let sum = 0;

  if (a > b) {
    for (let i = b; i <= a; i++) sum += i;
  } else {
    for (let i = a; i <= b; i++) sum += i;
  }

  return sum;
};
```
