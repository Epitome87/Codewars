# [Enumerable Magic #2 - True for Any?](https://www.codewars.com/kata/54598e89cbae2ac001001135)

## Description

Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

Ruby: If you get stuck, you can read up here:

http://www.rubycuts.com/enum-any

## My Solution

**JavaScript**

```js
const any = (arr, fun) => arr.some(fun);
```

```js
const any = (arr, fun) => {
  for (let item of arr) {
    if (fun(item)) return true;
  }
  return false;
};
```
