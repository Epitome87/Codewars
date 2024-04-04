# [Vector Class](https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4)

## Description

Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

```js
var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b); // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b); // should return 1*3 + 2*4 + 3*5 = 26
a.norm(); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c); // throws an error
```

If you try to add, subtract, or dot two vectors with different lengths, **you must throw an error!**

Also provide:

- a `toString` method, so that using the vectors from above, `a.toString() === '(1,2,3)'` (in Python, this is a `__str__` method, so that str(a) == '(1,2,3)')
- an `equals` method, to check that two vectors that have the same components are equal

Note: the test cases will utilize the user-provided `equals` method.

## My Solution

**JavaScript**

```js
class Vector {
  constructor(args) {
    this.args = args;
  }

  add(vector) {
    this.compareLengths(vector);
    return new Vector(this.args.map((v, i) => v + vector.args[i]));
  }

  subtract(vector) {
    this.compareLengths(vector);
    return new Vector(this.args.map((v, i) => v - vector.args[i]));
  }

  dot(vector) {
    this.compareLengths(vector);
    return this.args.reduce((acc, cur, i) => acc + cur * vector.args[i], 0);
  }

  norm() {
    return Math.sqrt(this.args.reduce((acc, cur) => acc + cur ** 2, 0));
  }

  equals(vector) {
    return this.args.every((v, i) => v === vector.args[i]);
  }

  toString() {
    return `(${this.args.join(',')})`;
  }

  compareLengths(vector) {
    if (this.args.length !== vector.args.length) throw Error('Not equal lengths');
  }
}
```

```js
class Vector {
  constructor(args) {
    this.args = args;
  }

  add(vector) {
    this.compareLengths(vector);
    return new Vector(this.args.map((v, i) => v + vector.args[i]));
  }

  subtract(vector) {
    this.compareLengths(vector);
    return new Vector(this.args.map((v, i) => v - vector.args[i]));
  }

  dot(vector) {
    this.compareLengths(vector);
    return this.args.reduce((acc, cur, i) => acc + cur * vector.args[i], 0);
  }

  norm() {
    return Math.hypot(...this.args);
  }

  equals(vector) {
    return this.toString() === vector.toString();
  }

  toString() {
    return `(${this.args})`;
  }

  compareLengths(vector) {
    if (this.args.length !== vector.args.length) throw Error('Vectors are not equal lengths');
  }
}
```
