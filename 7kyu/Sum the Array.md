# [Sum the Array](https://www.codewars.com/kata/56bdf9d50d0b6433df001074)

## Description

Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

For example:

```
var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
```

## My Solution

**JavaScript**

```js
Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
```
