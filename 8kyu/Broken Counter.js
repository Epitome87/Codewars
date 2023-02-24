/*
Our counter prototype is broken. Can you spot, what's wrong here?

Original code:
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
*/

// My solution:
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

// Can also use the newer Class syntax:
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

/* Takeaways:
1) The starting code was not setting the prototypes equal to a function properly.
*/
