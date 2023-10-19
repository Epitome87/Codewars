# [Odd Not Prime](https://www.codewars.com/kata/5a9996fa8e503f2b4a002e7a)

## Description

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

## My Solution

**JavaScript**

```js
const oddNotPrime = (n) => {
  const odds = [...Array(n)].map((_, idx) => idx + 1).filter((el) => el % 2);
  const notPrime = odds.filter((el) => {
    for (let i = 2; i < el; i++) {
      if (el % i === 0) return true;
    }
    return el === 1 || false;
  });

  return notPrime.length;
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

const oddNotPrime = (n) =>
  [...Array(++n >> 1)].map((_, idx) => idx * 2 + 1).reduce((pre, val) => +!isPrime(val) + pre, 0);
```
