# [Is This Working?](https://www.codewars.com/kata/559f8d487fa8511c43000118)

## Description

Rewriting selfies

Let's get rid of the `self` usage, by using arrow functions!
This can be achieved without arrow functions as well, but the point would be to learn the differences.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## My Solution

**JavaScript**

```js
function Counter() {
  this.count = 0;

  this.updateCount = function () {
    this.count++;
  };
}
```
