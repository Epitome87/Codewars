# [Training JS #15: Methods of Number Object - toFixed, toExponential, toPrecision](https://www.codewars.com/kata/57256064856584bc47000611)

## Description

Coding in function `howManySmaller`, function accept 2 parameter: `arr` and `n`. `arr` is a decimal array. `n` is a decimal.

The first mission: let all elements in the array keep two decimal places (No need to convert number n).

The second mission: Traversal `arr`, count the number of the element which smaller than `n` and return it.

for example:

```
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
```

## My Solution

**JavaScript**

```js
const howManySmaller = (arr, n) => arr.reduce((acc, cur) => (cur.toFixed(2) < n ? acc + 1 : acc), 0);
```

```js
const howManySmaller = (arr, n) => arr.map((x) => x.toFixed(2)).reduce((acc, cur) => (cur < n ? acc + 1 : acc), 0);
```
