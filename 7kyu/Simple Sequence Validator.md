# [Simple Sequence Validator](https://www.codewars.com/kata/553f01db29490a69ff000049)

## Description

Create a function that will return true if all numbers in the sequence follow the same counting pattern. If the sequence of numbers does not follow the same pattern, the function should return false.

Sequences will be presented in an array of varied length. Each array will have a minimum of 3 numbers in it.

The sequences are all simple and will not step up in varying increments such as a Fibonacci sequence.

JavaScript examples:

```js
validateSequence([1, 2, 3, 4, 5, 6, 7, 8, 9]) === true;
validateSequence([1, 2, 3, 4, 5, 8, 7, 8, 9]) === false;
validateSequence([2, 4, 6, 8, 10]) === true;
validateSequence([0, 2, 4, 6, 8]) === true;
validateSequence([1, 3, 5, 7, 9]) === true;
validateSequence([1, 2, 4, 8, 16, 32, 64]) === false;
validateSequence([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]) === false;
```

## My Solution

**JavaScript**

```js
const validateSequence = (x) => x.slice(0, -1).every((val, idx) => x[idx + 1] === val + x[1] - x[0]);
```

```js
const validateSequence = (x) => {
  const delta = x[1] - x[0];
  return x.slice(0, -1).every((val, idx) => x[idx + 1] === val + delta);
};
```

### User Solution

**JavaScript**

```js
const validateSequence = (x) => x.every((val, idx) => val === x[0] + idx * (x[1] - x[0]));
```
