# [Round to Nearest 0 or 5](https://www.codewars.com/kata/582f52208278c6be55000067)

## Description

Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example:

```js
roundToFive([34.5, 56.2, 11, 13]);
```

should return

```js
[35, 55, 10, 15];
```

## My Solution

**JavaScript**

```js
const roundToFive = (numbers) => numbers.map((num) => Math.round(num / 5) * 5);
```
