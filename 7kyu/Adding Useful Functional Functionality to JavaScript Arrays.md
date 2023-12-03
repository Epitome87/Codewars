# [Adding Useful Functional Functionality to JavaScript Arrays](https://www.codewars.com/kata/52195c9bb576caf14200007f)

## Description

The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

While not forbidden try to write both function without using a for loop

## My Solution

**JavaScript**

```js
Array.range = function (start, count) {
  return Array.from({ length: count }, (_, idx) => start + idx);
};

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
```

## Takeaways:

1. Note that we cannot use something like this.slice(start, start + count) in the range function. This is because we are not adding it to the Array prototype, like we are with sum. Therefore we do not have access to the appropriate "this", or its slice method. Thus we note an important distinction between adding a method on the Array itself and on the Array's prototype!
