# [Product of the Main Diagonal of a Square Matrix](https://www.codewars.com/kata/551204b7509063d9ba000b45)

## Description

Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

```js
mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45
```

[Main Diagonal](http://en.wikipedia.org/wiki/Main_diagonal)

## My Solution

**JavaScript**

```js
const mainDiagonalProduct = (mat) => [...Array(mat.length)].reduce((acc, _, i) => acc * mat[i][i], 1);
```

```js
const mainDiagonalProduct = (mat) => {
  let product = 1;
  for (let i = 0; i < mat.length; i++) {
    product *= mat[i][i];
  }
  return product;
};
```

### User Solution

**JavaScript**

```js
const mainDiagonalProduct = (mat) => mat.reduce((pre, val, idx) => pre * val[idx], 1);
```
