# [Fast Fibonacci](https://www.codewars.com/kata/557226cd3554219bdf00019b)

## Description

The generic implementation of the fibonacci algorithm is usually something like the following

```js
function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}
```

Now thats all and well and good but that function isn't too efficient. If I wanted to get the 1000th number in the series, I'd have to wait... days? maybe years?

**Your task**

Write a more efficient fibonacci function that can calculate the 1000th+ number series without breaking a sweat. Read up on **tail call optimization** for some help.

**Starting values**

    fib(0) = 0;
    fib(1) = 1;

## My Solution

**JavaScript**

```js
const fib = (num) => {
  const cache = { 0: 0, 1: 1 };

  const solve = (num) => {
    if (num in cache) return cache[num];
    return (cache[num] = solve(num - 1) + solve(num - 2));
  };

  return solve(num);
};
```

### User Solution

**JavaScript**

```js
function fib(num, current = 0, next = 1) {
  if (num === 0) return current;

  return fib(--num, next, current + next);
}
```

```js
function fib(num) {
  var a = 0,
    b = 1;

  while (num--) {
    [a, b] = [b, a + b];
  }

  return a;
}
```
