# [Train to Remove Duplicates from an Array with filter()](https://www.codewars.com/kata/58308360aeb69a460b0002b2)

## Description

In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter(); return the array containing unique values only.

Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

For example:

var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]

## My Solution

**JavaScript**

```js
const unique = (arr) => arr.filter((el, idx) => arr.indexOf(el) === idx);
```

### User Solution

**JavaScript**

```js
function unique(arr) {
  let encountered = {};
  return arr.filter((e) => (!encountered[e] ? (encountered[e] = true) : false));
}
```
