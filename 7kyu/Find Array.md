# [Find Array](https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055)

## Description

You are given two arrays arr1 and arr2, where arr2 always contains integers.

Write a function such that:

For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']

For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]

For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]

For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]

For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]

Note that when an element inside arr2 is greater than the index of the last element of arr1 no element of arr1 should be added to the resulting array. If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.

## My Solution

**JavaScript**

```js
const findArray = (arr1, arr2) => arr2.reduce((acc, curr) => (curr < arr1.length ? [...acc, arr1[curr]] : acc), []);
```

### User Solution

**JavaScript**

```js
function findArray(arr1, arr2) {
  return arr2.filter((i) => i < arr1.length).map((i) => arr1[i]);
}
```

```js
// Why does this Pass when sometimes arr1[e] might result in undefined, which should not be added to the resulting array?
function findArray(arr1, arr2) {
  return arr1.length ? arr2.map((e) => arr1[e]) : [];
}
```
