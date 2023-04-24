# [Working with Arrays (And Why Your Code Fails in Some Katas)](https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e)

## Description

In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Hint: watch out for side effects.

Some good reading: MDN Docs about arrays

Original code that needs to be fixed:

```js
function withoutLast(arr) {
  arr2.pop();
  return arr2;
}
```

## My Solution

**JavaScript**

```js
const withoutLast = (arr) => arr.slice(0, -1);
```

```js
const withoutLast = (arr) => {
  const arrCopy = arr.slice(); // Shallow copy array to avoid mutation
  arrCopy.pop();
  return arrCopy;
};
```

## Takeaways

1. Essentially, the Kata was just pointing out that we should avoid mutating the input (causing side-effects).
