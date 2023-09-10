# [Sum Times Tables](https://www.codewars.com/kata/551e51155ed5ab41450006e1)

## Description

Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.

For example, for sumTimesTables([2,5],1,3) the result should be the same as

```
2*1 + 2*2 + 2*3 +
5*1 + 5*2 + 5*3
```

i.e. the table of two from 1 to 3 plus the table of five from 1 to 3

All the numbers are integers but you must take in account:

- tables could be empty.
- min could be negative.
- max could be really big.

## My Solution

**JavaScript**

```js
const sumTimesTables = (tables, min, max) =>
  tables.reduce((acc, cur) => acc + (cur * (min + max) * (max - min + 1)) / 2, 0);
```

```js
const sumTimesTables = (tables, min, max) => {
  let sum = 0;
  for (let i of tables) {
    sum += (i * (min + max) * (max - min + 1)) / 2;
  }
  return sum;
};
```

### User Solution

**JavaScript**

```js
const sumTimesTables = (tables, min, max) =>
  (tables.reduce((pre, val) => pre + val, 0) * (max + min) * (max - min + 1)) / 2;
```
