# [Smart Sum](https://www.codewars.com/kata/5831200eb812b8016d000094)

## Description

Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

```js
smartSum(1, 2, 3, [4, 5], 6); // returns 21
smartSum(1, 2, [[3, 4], 5], 6); // returns 21
```

## My Solution

**JavaScript**

```js
const smartSum = (...args) => args.flat(Infinity).reduce((acc, cur) => acc + cur, 0);
```

```js
const smartSum = (...a) => a.reduce((acc, cur) => acc + (typeof cur === 'number' ? cur : smartSum(...cur)), 0);
```
