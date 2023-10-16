# [2D List by the Sequential Integers](https://www.codewars.com/kata/5a8897d4ba1bb5f266000057)

## Description

Make the 2D list by the sequential integers started by the head number.

See the example test cases for the expected output.

```
Note:

-10**20 < the head number <10**20
1 <=  the number of rows <= 1000
0 <=  the number of columns <= 1000
```

## My Solution

**JavaScript**

```js
const make2dList = (head, row, col) => [...Array(row)].map((_, r) => [...Array(col)].map((_, c) => head + r * col + c));
```

```js
const make2dList = (head, row, col) => {
  const result = [];

  for (let i = 0; i < row; i++) {
    result.push([]);
    for (let j = 0; j < col; j++) {
      result[i].push(head + i * col + j);
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
make2dList = (n, x, y) => [...Array(x)].map((_) => [...Array(y)].map((_) => n++));
```
