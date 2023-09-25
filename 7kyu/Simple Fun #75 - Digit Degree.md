# [Simple Fun #75: Digit Degree](https://www.codewars.com/kata/589422431a88082ea600002a)

## Description

Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer n, find its digit degree.

**Example**

For n = 5, the output should be 0;

For n = 100, the output should be 1;

For n = 91, the output should be 2.

**Input/Output**

- [input] integer n

Constraints: 5 ≤ n ≤ 109.

- [output] an integer

## My Solution

**JavaScript**

```js
const digitDegree = (n) => {
  let degree = 0;
  while (n >= 10) {
    n = [...`${n}`].reduce((acc, cur) => acc + +cur, 0);
    degree++;
  }
  return degree;
};
```

### User Solution

**JavaScript**

```js
const digitDegree = (n) => (n < 10 ? 0 : 1 + digitDegree([...`${n}`].reduce((pre, val) => pre + +val, 0)));
```
