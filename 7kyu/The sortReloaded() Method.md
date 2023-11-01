# [The sortReloaded() Method](https://www.codewars.com/kata/5610a8eeb9a84d624b000005)

## Description

Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.

**Task**

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.

**Note**

- For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them.
- You have to return a new array, do not modify the original array.

## My Solution

**JavaScript**

```js
Array.prototype.sortReloaded = function (dir = 'asc') {
  return dir === 'asc' ? [...this].sort((a, b) => a - b) : dir === 'desc' ? [...this].sort((a, b) => b - a) : false;
};
```
