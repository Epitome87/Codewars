/*
 */

// My solution:
function Counter() {
  this.count = 0;
}

Counter.prototype.incr = function () {
  this.count++;
};

Counter.prototype.valueOf = function () {
  return Number(this.count);
};

// Top user solution (using Classes):
class Counter {
  constructor() {
    this.counter = 0;
  }

  incr() {
    this.counter++;
  }

  valueOf() {
    return this.counter;
  }
}
