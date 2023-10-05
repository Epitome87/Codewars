# [Sum and Length](https://www.codewars.com/kata/571965ccdf7fdb10a00000ea)

## Description

In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...

For example:

```
sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
```

## My Solution

**JavaScript**

```js
const sumLength = (arr) => {
  const sumPositive = arr.reduce((acc, cur) => acc + (cur > 0 ? cur : 0), 0);
  const numNegative =
    arr.reduce((acc, cur) => acc + (cur < 0 ? 1 : 0), 0) + Math.ceil(arr.filter((n) => n === 0).length / 2);
  return `${sumPositive} ${numNegative}`;
};
```
