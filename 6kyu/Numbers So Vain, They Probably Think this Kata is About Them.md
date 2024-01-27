# [Numbers So Vain, They Probably Think This Kata is About Them](https://www.codewars.com/kata/565225029bcf176687000022)

## Description

Well, those numbers were right and we're going to feed their ego.

Write a function, isNarcissistic, that takes in any amount of numbers and returns true if all the numbers are narcissistic. Return false for invalid arguments (numbers passed in as strings are ok).

For more information about narcissistic numbers (and believe me, they love it when you read about them) follow this link: https://en.wikipedia.org/wiki/Narcissistic_number

## My Solution

**JavaScript**

```js
const isNarcissistic = (...nums) =>
  nums.every((n) => n !== '' && [...`${n}`].reduce((acc, cur) => acc + cur ** `${n}`.length, 0) == n);
```

```js
const isNarcissistic = (...nums) => {
  for (const num of nums) {
    if (num === '' || !isNaN(num)) return false;
    const numDigits = `${+num}`.length;
    if ([...`${+num}`].reduce((acc, cur) => acc + cur ** numDigits, 0) !== +num) return false;
  }

  return true;
};
```

```js
const isNarcissistic = (...nums) => {
  for (let num of nums) {
    if (num === '' || !Number.isInteger(+num)) return false;
    const numDigits = `${+num}`.length;
    const digits = [...`${+num}`];
    const sum = digits.reduce((acc, cur) => acc + cur ** numDigits, 0);
    const isNarc = sum === +num;
    if (!isNarc) return false;
  }

  return true;
};
```
