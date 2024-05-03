# [Reverse Fibonacci Series](https://www.codewars.com/kata/550fac5249073256380002c0)

## Description

Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order up to the given number.

**Example**

```js
reverseFibo(3); // => '110'
reverseFibo(10); // => '3421138532110'
```

## My Solution

**JavaScript**

```js
const reverseFibo = (n, memo = [0, 1]) =>
  [...Array(n)].reduce((acc, _, i) => ((memo[i] = memo[i - 2] + memo[i - 1] || memo[i]), memo[i] + acc), '');
```

```js
const reverseFibo = (n) => {
  const memo = { 1: 0, 2: 1 };
  let result = '';

  for (let i = 1; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1] || memo[i];
    result = memo[i] + result;
  }

  return result;
};
```
