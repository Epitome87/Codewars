/*
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/

// My solution:
class Class {
  static count = 0;
  static getNumber() {
    return (this.count = this.count ? this.count * 2 : 1);
  }
}

// Clever user solution:
class Class {
  static value = 0.5;
  static getNumber() {
    return (this.value = this.value * 2);
  }
}
