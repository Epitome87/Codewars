# [Array Arithmetic](https://www.codewars.com/kata/5645fda2956e462b5100005e)

## Description

Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements. Examples:

```js
(([1, 2, 3] + 4 === (10)[(1, 1, 1)] - 3) === (0)[('a', 'b')] + 'c') === 'abc';
```

PS: Due to intrinsic uncertainty of empty arrays, in this kata an empty array is treated as 0. For hints see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

## My Solution

**JavaScript**

```js
Array.prototype.valueOf = function () {
  return (this.length ? this : [0]).reduce((acc, cur) => acc + cur);
};
```

### User Solution

**JavaScript**

```js
Array.prototype.valueOf = function () {
  return this.length && this.reduce((s, n) => s + n);
};
```
