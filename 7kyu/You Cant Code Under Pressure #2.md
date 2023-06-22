# [You Can't Code Under Pressure #2](https://www.codewars.com/kata/5546ea9bddfc5c0c38000026)

## Description

Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

## My Solution

**JavaScript**

```js
class Counter {
  constructor() {
    this.count = 0;
  }

  check() {
    return this.count;
  }

  increment() {
    this.count++;
  }
}
```

```js
function Counter() {
  let count = 0;

  this.check = function () {
    return count;
  };

  this.increment = function () {
    // use_restroom is visible to all
    count++;
  };
}
```
