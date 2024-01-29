# [Sum of Prime-Indexed Elements](https://www.codewars.com/kata/59f38b033640ce9fc700015b)

## Description

In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

## My Solution

**JavaScript**

```js
const total = (arr) => arr.reduce((acc, cur, idx) => acc + (isPrime(idx) && cur), 0);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= n ** 0.5; i++) if (n % i === 0) return false;
  return true;
};
```

### User Solution

**JavaScript**

```js
const isPrime = (num) => {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
};

const total = (arr) => arr.reduce((pre, val, idx) => pre + isPrime(idx) * val, 0);
```
