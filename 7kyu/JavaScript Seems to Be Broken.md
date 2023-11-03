# [JavaScript Seems to Be Broken](https://www.codewars.com/kata/565d6d1696e154b51b000076)

## Description

There is some horribly rotten script that is not required in your project anymore, and it is affecting the way your code is supposed to work.

For some reason you don't have an access to that rotten piece of code but you want to get your code working as expected in any possible way.

Go and get it working!

## My Solution

**JavaScript**

```js
Array.prototype.join = function (str) {
  return this.reduce((acc, cur, idx) => acc + cur + (idx != this.length - 1 ? str : ''), '');
};

const semicolonSeparationToCommaSeparation = (input) => input.split(';').join(',');
```

### User Solution

**JavaScript**

```js
function semicolonSeparationToCommaSeparation(input) {
  return input.split(';').join(',');
}

Array.prototype.join = function (c) {
  return this.reduce((a, b) => a + (c || ',') + b);
};
```

```js
// Note: This works because the Kata author broke the default join method. If we console.log(Array.prototype.join.toString()) we will see that original join method had been moved to Array.prototype._join
function semicolonSeparationToCommaSeparation(input) {
  return input.split(';')._join(',');
}
```
