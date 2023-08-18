# [Kind Rem(a)inder](https://www.codewars.com/kata/5a08a64b7bbb9e237f000a0d)

## Description

Write a function that will receive three arguments. The first two will always be arrays consisting of integers, the third one will be a string of letters. The lengths of the first two arrays will be equal, and the integers will always be positive.

You function should divide the first integer of the first array by the first one of the second array to find the remainder and then do the same with the second pair of integers, etc. If the biggest remainder of all found is an even number, the function should return the string in minuscule (small letters). Otherwise, the function should return the string in majuscule (capital letters).

Example:

function([16, 16], [10, 5], 'Doctor') should return 'doctor', because:

the remainder of the first pair of integers (16 divided by 10) is 6;

the remainder of the second pair is 1;

the biggest remainder found is 6, and since 6 is an even number --> the string is returned in minuscule.

## My Solution

**JavaScript**

```js
const kira = (a, b, c) => (Math.max(...a.map((n, idx) => n % b[idx])) % 2 ? c.toUpperCase() : c.toLowerCase());
```

```js
const kira = (a, b, c) => {
  const remainders = a.map((n, idx) => n % b[idx]);
  const isOdd = Math.max(...remainders) % 2;
  return isOdd ? c.toUpperCase() : c.toLowerCase();
};
```
