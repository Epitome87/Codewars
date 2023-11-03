# [Math Object Madness](https://www.codewars.com/kata/56bc0fc65bdaeb46d800084a)

## Description

You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript Math object! Being the Developer that you are, you decide to recover as much of the functionality as possible.

**Objective**

Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

1. Math.ceil(x)
2. Math.floor(x)
3. Math.round(x)
4. Math.abs(x)
5. Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
6. Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
7. Math.pow(x,y) (you may assume the exponent is always a positive integer)

You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.

## My Solution

**JavaScript**

```js
Math.floor = function (x) {
  return x ^ 0;
};

Math.ceil = function (x) {
  return Number.isInteger(x) ? x : Math.floor(x) + 1;
};

Math.round = function (x) {
  return x % 1 < 0.5 ? Math.floor(x) : Math.ceil(x);
};

Math.abs = function (x) {
  return x < 0 ? x * -1 : x;
};

Math.max = function (...args) {
  return args.reduce((acc, cur) => (cur > acc ? cur : acc));
};

Math.min = function (...args) {
  return args.reduce((acc, cur) => (cur < acc ? cur : acc));
};

Math.pow = function (x, y) {
  return x ** y;
};
```
