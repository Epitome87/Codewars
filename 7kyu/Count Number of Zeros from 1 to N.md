# [Count Number of Zeros from 1 to N](https://www.codewars.com/kata/557cffec8c3e8e55cc00010f)

## Description

Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

```js
countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
```

## My Solution

**JavaScript**

```js
const countZeros = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + (`${cur}`.match(/0/g) || []).length, 0);
```

### User Solution

**JavaScript**

```js
const countZeros = (n) => [...Array(n)].reduce((pre, _, idx) => pre + ++idx, ``).replace(/[^0]/g, ``).length;
```
