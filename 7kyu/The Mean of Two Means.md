# [The Mean of Two Means](https://www.codewars.com/kata/583df40bf30065fa9900010c)

## Description

Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.

## My Solution

**JavaScript**

```js
const getMean = (arr, x, y) => {
  if (x < 2 || y < 2 || x > arr.length || y > arr.length) return -1;
  const mean = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  return mean([mean(arr.slice(0, x)), mean(arr.slice(-y))]);
};
```
