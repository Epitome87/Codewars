# [Broken Counter](https://www.codewars.com/kata/526471539d52735c620000c6)

## Description

Our counter prototype is broken. Can you spot, what's wrong here?

Original code:

```js
function Counter() {
  this.value = 0;
}

Counter.prototype.increase() {
  this.value++;
};

Counter.prototype.getValue() {
  return this.value;
};

Counter.prototype.reset() {
  this.value = 0;
};
```

## My solution

```js
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};
```

```js
class Counter {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  getValue() {
    return this.value;
  }

  reset() {
    this.value = 0;
  }
}
```

## Takeaways

1. The starting code was not setting the prototypes equal to a function properly.
