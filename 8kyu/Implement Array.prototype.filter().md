# [Implement Array.prototype.filter()](https://www.codewars.com/kata/56dd9b84fe5754786f0014f7)

## Description

What we want to implement is **`Array.prototype.filter()`** function, just like the existing `Array.prototype.filter()`. Another similar function is `_.filter()` in underscore.js and lodash.js.

The usage will be quite simple, like:

    [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

_Of course, the existing `Array.prototype.filter()` function has been undefined for the purposes of this Kata._

---

More info can be found here:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## My Solution

**JavaScript**

```js
Array.prototype.filter = function (func) {
  return this.reduce((acc, cur) => (func(cur) ? [...acc, cur] : acc), []);
};
```

```js
Array.prototype.filter = function (func) {
  const results = [];

  for (let item of this) {
    if (func(item)) results.push(item);
  }

  return results;
};
```
