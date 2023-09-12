# [Get Array Elements with Specified Keys](https://www.codewars.com/kata/586a3270c66d18ad810001d4)

## Description

Create a function that lets people easily grab only the array elements with given keys.

For example:

```js
var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']
```

Note: The order of the elements should be preserved in the resulting array.

## My Solution

**JavaScript**

```js
Array.prototype.only = function (keys) {
  return this.filter((_, idx) => keys.includes(idx));
};
```
