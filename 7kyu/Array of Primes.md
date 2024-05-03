# [Array of Primes](https://www.codewars.com/kata/5681bc8d17af37f50e000015)

## Description

Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

`start` is the integer from which your range starts. **(inclusive)**

`end` is the integer at which your range ends. **(inclusive)**

If the range does not contain any prime numbers return `null`.

Examples:

```js
primes(5, 7); // [5, 7]
primes(8, 9); // null
primes(1, 10); // [2, 3, 5, 7]
```

## My Solution

**JavaScript**

```js
const isPrime = (n) => {
  for (let i = 2, limit = Math.sqrt(n); i <= limit; i++) if (!(n % i)) return false;
  return n > 1;
};

const primes = (start, end) => {
  const result = Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(isPrime);
  return result.length ? result : null;
};
```
