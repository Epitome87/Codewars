# [Basic Method](https://www.codewars.com/kata/55da49c166949c319200003e)

## Description

Extend the Array's built-in functions by implementing .max() method. This method will return the largest number in the array. If the array contains one or more non-number elements that can't be converted into numbers (e.g., string letters), return NaN

Example:

```js
[2, 5, 1, 3]
  .max() // returns 5
  [(1, 2, 3, 8, 4, 9, 7, 42, 99)].max() // returns 99
  [(2, '5', 1, 3)].max() // returns 5 ("5" can be converted to 5)
  [(2, 5, 1, 'ab')].max(); // returns NaN ("ab" can't be converted to a number)
```

Array will contain at least one item.

## My Solution

**JavaScript**

```js
Array.prototype.max = function () {
  return this.some(isNaN) ? NaN : Math.max(...this);
};
```

### User Solution

**JavaScript**

```js
Array.prototype.max = function () {
  return Math.max(...this);
};
```

## Takeaways

1. `Math.max()` already returns `NaN` if one of its arguments cannot be converted to a number!
