# [Perimeter of Squares in a Rectangle](https://www.codewars.com/kata/559a28007caad2ac4e000083)

## Description

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 _ (1 + 1 + 2 + 3 + 5 + 8) = 4 _ 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

```
perimeter(5)  should return 80
perimeter(7)  should return 216
```

**JavaScript**

```js
const perimeter = (n) => {
  const sequence = [];
  for (let i = 0; i <= n; i++) {
    i <= 1 ? sequence.push(1) : sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return 4 * sequence.reduce((acc, cur) => acc + cur, 0);
};
```

### User Solution

**JavaScript**

```js
// Binet's Fibonacci Number Formula
const perimeter = (n) => 4 * Math.round(((1 + 5 ** 0.5) / 2) ** (n + 3) / 5 ** 0.5 - 1);
```
