# [String Average](https://www.codewars.com/kata/5966847f4025872c7d00015b)

## Description

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

## My Solution

**JavaScript**

```js
const averageString = (str) => {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const strArr = str.split(' ');
  if (!strArr.every((n) => nums.includes(n))) return 'n/a';
  return nums[Math.floor(strArr.reduce((acc, curr) => acc + nums.indexOf(curr), 0) / strArr.length)];
};
```
