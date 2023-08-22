# [Sum of a Nested List](https://www.codewars.com/kata/5a15a4db06d5b6d33c000018)

## Description

Implement a function to calculate the sum of the numerical values in a nested list. For example :

```
sumNested([1, [2, [3, [4]]]]) => 10
```

## My Solution

**JavaScript**

```js
const sumNested = (arr) => (!Array.isArray(arr) ? arr : arr.reduce((acc, cur) => acc + sumNested(cur), 0));
```

```js
// Cheesy solution
const sumNested = (arr) => arr.flat(Infinity).reduce((acc, cur) => acc + cur, 0);
```

### User Solution

**JavaScript**

```js
const sumNested = (arr) => arr.reduce((pre, val) => pre + (Array.isArray(val) ? sumNested(val) : val), 0);
```
