# [Potenciation](https://www.codewars.com/kata/59fc72fe235f93838b002235)

## Description

The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note: zero to the power of zero equals one in this kata

## My Solution

**JavaScript**

```js
const power = (x, y) => x ** y;
```

```js
function power(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}
```

### User Solution

**JavaScript**

```js
function power(x, y) {
  if (x == 1) return 1;
  return y ? x * power(x, y - 1) : 1;
}
```
