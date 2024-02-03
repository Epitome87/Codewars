# [Sort with a Sorting Array](https://www.codewars.com/kata/59dc8288fc3c49cc3f000039)

## Description

Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

## My Solution

**JavaScript**

```js
const sort = (initial, sorting) => initial.map((_, idx) => initial[sorting.indexOf(idx)]);
```

```js
const sort = (initial, sorting) => sorting.reduce((acc, cur, i) => ((acc[cur] = initial[i]), acc), []);

const sort = (initial, sorting) => initial.reduce((acc, cur, i) => ((acc[sorting[i]] = cur), acc), []);
```

```js
const sort = (initial, sorting) => {
  const result = new Array(initial.length).fill(null);

  for (let i = 0; i < initial.length; i++) {
    result[sorting[i]] = initial[i];
  }

  return result;
};
```

```js
const sort = (initialArr, sortingArr) => {
  const arr = sortingArr.map((n, i) => [n, initialArr[i]]);
  return arr.sort((a, b) => a[0] - b[0]).map((n) => n[1]);
};
```
