# [Give Me the k First Digits. Odd Digits](https://www.codewars.com/kata/59e8afdd0863c7bcb300013a)

## Description

You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

- there are no odd digits in a number n;
- k is bigger than a number of digits in n;
- k = 0;
- k is bigger than a number of odd digits in n.

BTW, is 0 an odd number or an even one?

## My Solution

**JavaScript**

```js
const findOddDigits = (n, k) => {
  const odds = [...`${n}`].filter((v) => +v % 2);
  return k > odds.length ? 0 : +odds.join('').slice(0, k);
};
```

### User Solution

**JavaScript**

```js
const findOddDigits = (n, k, odd) => ((odd = String(n).replace(/[02468]/g, '')).length >= k ? +odd.slice(0, k) : 0);
```
