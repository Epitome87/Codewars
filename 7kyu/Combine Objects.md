# [Combine Objects](https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819)

## Description

Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

```js
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
combine(objA, objB); // Returns { a: 13, b: 20, c: 36, d: 3 }
```

The combine function should be a good citizen, so should not mutate the input objects.

## My Solution

**JavaScript**

```js
const combine = (...objs) =>
  objs.reduce((acc, cur) => (Object.keys(cur).forEach((v) => (acc[v] = (acc[v] || 0) + cur[v])), acc), {});
```

```js
const combine = (...objs) => {
  let res = {};

  for (let obj of objs) {
    for (let key in obj) {
      res[key] = (res[key] || 0) + obj[key];
    }
  }

  return res;
};
```
