# [Array.isArray](https://www.codewars.com/kata/525a4cab1650d76b8000084d)

## Description
JavaScript 1.8.5 helpfully added the Array.isArray function, which can tell you whether its argument is an Array or not. Without it, checking whether something is an Array is rather tricky. How would you do it if you had to?

## My Solution

**JavaScript**

```js
const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';
```

### User Solution

**JavaScript**

```js
function isArray(arr) {
  return (arr instanceof Array || arr === Array.prototype) && arr.hasOwnProperty('length');
}
```
