# [Simple Fibonacci Strings](https://www.codewars.com/kata/5aa39ba75084d7cf45000008)

## Description

Given that

```
f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1
```

You will be given a number and your task is to return the nth fibonacci string. For example:

```
solve(2) = '010'
solve(3) = '01001'
```

More examples in test cases. Good luck!

If you like sequence Katas, you will enjoy this Kata: Simple Prime Streaming

## My Solution

**JavaScript**

```js
const solve = (n) => (n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2));
```

```js
const solve = (n) => {
  if (n === 0) return '0';
  if (n === 1) return '01';
  let result = ['0', '01'];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[result.length - 1];
};
```

### User Solution

**JavaScript**

```js
const solve = (n) => [`0`, `01`][n] || solve(--n) + solve(--n);
```

```js
const memo = {
  0: '0',
  1: '01',
};

function fib(n) {
  if (!memo[n]) {
    memo[n] = fib(n - 1) + fib(n - 2);
  }

  return memo[n];
}

function solve(n) {
  return n < 0 ? null : fib(n);
}
```
