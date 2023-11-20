# [I Guess This Is A 7kyu Kata #4: Find 0 And 1](https://www.codewars.com/kata/57d237f25dc38ede6e00026b)

## Description

Give You an 2D array that only contains 0 and 1, please find out how many 1 are surrounded by 0 or 0 surrounded by 1. "Surrounded" means that its four directions(up down left right) all are different numbers.

Example:

```
[
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,0,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]

There are three 1 surrounded by 0(the x in the array):
[
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,x,0,1,1,0],
[0,0,1,0,0,x,0,1,0],
[0,0,1,0,x,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]

There are two 0 surrounded by 1(the x in the array):
[
[0,1,1,0,1,1,0,1,0],
[1,x,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,x,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]
```

So we need return a number 5 (three 1 + two 0)

**Task**

Complete function find01 that accepts a argument arr, return a number that is the count of 1 surrounded by 0 or 0 surrounded by 1.

## My Solution

**JavaScript**

```js
const find01 = (arr) =>
  arr
    .slice(1, -1)
    .reduce(
      (acc, cur, i) =>
        acc +
        cur
          .slice(1, -1)
          .reduce(
            (acc2, cur2, i2) =>
              acc2 + [arr[i][i2 + 1], arr[i + 2][i2 + 1], cur[i2], cur[i2 + 2]].every((v) => v !== cur2),
            0
          ),
      0
    );
```

```js
const find01 = (arr) => {
  return arr.slice(1, -1).reduce((acc, cur, i) => {
    for (let col = 1; col < cur.length - 1; col++)
      if ([arr[i][col], arr[i + 2][col], cur[col - 1], cur[col + 1]].every((v) => v !== cur[col])) acc++;
    return acc;
  }, 0);
};
```

```js
const find01 = (arr) => {
  let count = 0;

  for (let row = 1; row < arr.length - 1; row++) {
    for (let col = 1; col < arr[row].length - 1; col++) {
      const up = arr[row - 1][col];
      const down = arr[row + 1][col];
      const left = arr[row][col - 1];
      const right = arr[row][col + 1];

      if ([up, down, left, right].every((v) => v !== arr[row][col])) {
        count++;
      }
    }
  }

  return count;
};
```