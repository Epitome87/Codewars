# [Forbidden Constructor](https://www.codewars.com/kata/551e467e24b7a4e0b20001e8)

## Description

You are given a `Point` constructor function.

Instead of using the constructor function, we would like to construct our Points through a `Point.create` function with the same arguments as the function constructor. The usage of `new Point(x, y)` should be forbidden and raise an exception.

Please refactor the code to achieve this: the newly created Points should only expose two attributes (`x` and `y`) and they should still be `Point` instances.

## My Solution

**JavaScript**

```js
function Point() {
  throw 'Use of the "new" keyword is forbidden!';
}

Point.create = (x, y) => {
  const point = Object.create(Point.prototype);
  point.x = x;
  point.y = y;
  return point;
};
```

### User Solution

**JavaScript**

```js
class Point {
  constructor() {
    throw Error();
  }

  static create(x, y) {
    let p = Object.create(Point.prototype);
    p.x = x;
    p.y = y;
    return p;
  }
}
```
