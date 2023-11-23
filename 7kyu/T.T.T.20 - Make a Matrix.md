# [T.T.T.20: Make a Matrix](https://www.codewars.com/kata/57a4395ce298a72d71000306)

## Description

**Task**

Create function that accept two numeric array arr1 and arr2. Pick out the unique elements of the two array (unique meaning is that the elements in an array does not appear in the other array), and then make a square as large as possible. For example, if there are 17 such elements of two arrays, sorted them in ascending order, and then make a 4x4 matrix (an 2D array). The remaining elements will abandon. If no unique element found, return [].

**Examples**

```
-- example 1
input:
arr1 = [0,1,2,3,4,5]
arr2 = [5,6,7,8,9]

output:
[
  [0,1,2],
  [3,4,6],
  [7,8,9]
]

-- example 2
input:
arr1 = [1,2,3,4,5]
arr2 = [5,6,7,8,9]

output:
[
  [1,2],
  [3,4]
]

-- example 3
input:
arr1 = [1,2,3,4,5]
arr2 = [2,3,4,5,6]

output:
[
  [1]
]

-- example 4
input:
arr1 = [1,2,3,4,5]
arr2 = [1,2,3,4,5]

output:
[]
```

## My Solution

**JavaScript**

```js
const makeMatrix = (arr1, arr2) => {
  const uniques = [...arr1.filter((v) => !arr2.includes(v)), ...arr2.filter((v) => !arr1.includes(v))].sort(
    (a, b) => a - b
  );
  const n = Math.sqrt(uniques.length) ^ 0;
  return [...Array(n)].reduce((acc, cur, i) => [...acc, uniques.slice(i * n, i * n + n)], []);
};
```

```js
const makeMatrix = (arr1, arr2) => {
  const uniques = [...arr1.filter((v) => !arr2.includes(v)), ...arr2.filter((v) => !arr1.includes(v))];
  const sorted = uniques.sort((a, b) => a - b);
  const rowLength = Math.sqrt(sorted.length) ^ 0;
  return [...Array(rowLength)].reduce(
    (acc, _, i) => [...acc, sorted.slice(i * rowLength, i * rowLength + rowLength)],
    []
  );
};
```

```js
const makeMatrix = (arr1, arr2) => {
  const uniques = [...arr1.filter((v) => !arr2.includes(v)), ...arr2.filter((v) => !arr1.includes(v))];
  const sorted = uniques.sort((a, b) => a - b);
  const result = [];

  const rowLength = Math.sqrt(sorted.length) ^ 0;
  for (let i = 0; i < rowLength; i++) {
    result.push(sorted.slice(i * rowLength, i * rowLength + rowLength));
  }

  return result;
};
```