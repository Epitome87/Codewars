# [Sum ALL the Arrays!](https://www.codewars.com/kata/5594463eaf1701909c0000d4)

## Description

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

## My Solution

**JavaScript**

```js
const arraySum = (arr) =>
  arr.flat(Number.MAX_VALUE).reduce((sum, curr) => sum + (typeof curr === 'number' ? curr : 0), 0);
```

### User Solution

**JavaScript**

```js
function arraySum(arr) {
  return (arr + '').split(',').reduce((s, cv) => s + (+cv || 0), 0);
}
```

```js
function arraySum(arr) {
  return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0);
}
```
