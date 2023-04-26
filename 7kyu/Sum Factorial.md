# [Sum Factorial](https://www.codewars.com/kata/56b0f6243196b9d42d000034)

## Description

Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.

Here are a few examples of factorials:

```
4 Factorial = 4! = 4 * 3 * 2 * 1 = 24

6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
```

In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

Good Luck!

Note: Assume that all values in the list are positive integer values > 0 and each value in the list is unique.

## My Solution

**JavaScript**

```js
const sumFactorial = (arr) => {
  const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);
  return arr.reduce((acc, curr) => acc + factorial(curr), 0);
};
```

### User Solution

**JavaScript**

```js
function sumFactorial(arr) {
  return arr.reduce((a, c) => a + [...Array(c + 1).keys()].slice(1).reduce((x, y) => x * y, 1), 0);
}
```
