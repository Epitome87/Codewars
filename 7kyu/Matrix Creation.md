# [Matrix Creation](https://www.codewars.com/kata/5a34da5dee1aae516d00004a)

## Description

Create an identity matrix of the specified size( >= 0).

Some examples:

```
(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]
```

## My Solution

**JavaScript**

```js
const getMatrix = (num) => [...Array(num)].map((_, ri) => [...Array(num)].map((_, ci) => (ri === ci ? 1 : 0)));
```

```js
const getMatrix = (num) => {
  const matrix = [];
  for (let row = 0; row < num; row++) {
    matrix.push([]);
    for (let col = 0; col < num; col++) {
      matrix[row].push(row === col ? 1 : 0);
    }
  }
  return matrix;
};
```

### User Solution

**JavaScript**

```js
const getMatrix = (n) => [...Array(n)].map((_, i, r) => r.map((_, j) => (i == j) | 0));
```
