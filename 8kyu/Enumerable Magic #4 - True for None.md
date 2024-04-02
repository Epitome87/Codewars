# [Enumerable Magic #4 - True for None](https://www.codewars.com/kata/545993ee52756d98ca0010e1)

## Description

Create a method none? (JS `none`) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

## My Solution

**JavaScript**

```js
const none = (arr, fun) => arr.every((x) => !fun(x));
```

```js
const none = (arr, fun) => !arr.some(fun);
```
