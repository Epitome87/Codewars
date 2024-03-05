# [Pure Functions](https://www.codewars.com/kata/59bdbe9d46038724ca0000b9)

## Description

A function is **pure** when:

- It always return the same value given the same arguments (it doesn't update or depend on out of the scope variables);
- Evaluation of the result does not cause side effect (mutations...) or output

**Task**

You are given a function that is impure, and your job is to purify it. This function must return a new array where each value is itself plus 2 times the "modifier", which is provided as a property of the `options` object.

Example:

```
Array = 1, 2, 3
Modifier = 5

Should return = 11, 12, 13
```

Original (not pure) code:

```js
const state = {
  modifier: 2,
};

function solution(arr, options) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += 2 * state.modifier;
  }

  console.log(arr);

  return arr;
}
```

## My Solution

**JavaScript**

```js
const solution = (arr, { modifier }) => arr.map((v) => v + 2 * modifier);
```
