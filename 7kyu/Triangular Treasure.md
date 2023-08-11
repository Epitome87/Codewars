# [Triangular Treasure](https://www.codewars.com/kata/525e5a1cb735154b320002c8)

## Description

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

```js
1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
```

You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

```js
0 --> 0
2 --> 3
3 --> 6
-10 --> 0
```

## My Solution

**JavaScript**

```js
const triangular = (n) => (n > 0 ? (n * (n + 1)) / 2 : 0);
```

```js
const triangular = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Area of full square minus unfilled triangle
  return n ** 2 - (n * (n - 1)) / 2;
};
```

### User Solution

**JavaScript**

```js
function triangular(n) {
  return n > 0 ? (n * n + n) / 2 : 0;
}
```

## Takeways:

1. Although my original recursive function seems like it should have worked,
   always consider a mathematical approach!
2. In particular, the formula n(n + 1)/2 seems to be common!
