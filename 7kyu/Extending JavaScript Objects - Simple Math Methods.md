# [Extending JavaScript Objects: Simple Math Methods](https://www.codewars.com/kata/581534b8d5fae4428e00001e)

## Description

Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), so you can perform simple mathematical operations on numbers just like this:

```js
var n = 25;

n.add(4); // 29   (addition)
n.sub(3); // 22   (subtraction)
n.mul(2); // 50   (multiplication)
n.div(5); // 5    (division)
n.pow(2); // 625  (power)
n.sqr(); // 5    (square root)
```

Also, you should be able to fluently chain these methods:

```js
var n = 25;

n.add(5).div(2).mul(3).sub(35).pow(2).sqr(); // 10
```

## My Solution

**JavaScript**

```js
Number.prototype.add = function (n) {
  return this + n;
};

Number.prototype.sub = function (n) {
  return this - n;
};

Number.prototype.mul = function (n) {
  return this * n;
};

Number.prototype.div = function (n) {
  return this / n;
};

Number.prototype.pow = function (n) {
  return this ** n;
};

Number.prototype.sqr = function (n) {
  return this ** 0.5;
};
```

### User Solution

**JavaScript**

```js
const { pow, sqrt } = Math;
Object.assign(Number.prototype, {
  add(n) {
    return this + n;
  },
  sub(n) {
    return this - n;
  },
  mul(n) {
    return this * n;
  },
  div(n) {
    return this / n;
  },
  pow(n) {
    return pow(this, n);
  },
  sqr() {
    return sqrt(this);
  },
});
```
