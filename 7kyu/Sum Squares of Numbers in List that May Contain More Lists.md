# [Sum Squares of Numbers in List that May Contain More Lists](https://www.codewars.com/kata/57882daf90b2f375280000ad)

## Description

Write a function that sums squares of numbers in list that may contain more lists

Example:

```js
var l = [1, 2, 3];
SumSquares(l) == 14;

var l = [[1, 2], 3];
SumSquares(l) == 14;

var l = [[[[[[[[[1]]]]]]]]];
SumSquares(l) == 1;

var l = [10, [[10], 10], [10]];
SumSquares(l) == 400;
```

Note: your solution must NOT modify the original list

Another Kata involving nested lists here (it's still in beta - more honor points for completing :D): https://www.codewars.com/kata/5786f020e55533ebb7000153

## My Solution

**JavaScript**

```js
const SumSquares = (l) => l.flat(Infinity).reduce((acc, cur) => acc + cur ** 2, 0);
```

### User Solution

**JavaScript**

```js
function SumSquares(l) {
  return l.reduce(function (res, item) {
    return Array.isArray(item) ? res + SumSquares(item) : res + Math.pow(item, 2);
  }, 0);
}
```

```js
function SumSquares(l) {
  if (Array.isArray(l)) {
    return l.reduce((prev, curr) => prev + SumSquares(curr), 0);
  } else {
    return l * l;
  }
}
```
