/*
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
*/

// My solution:
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

// Top user solution:
var Animal = function (name, type) {
  this.name = name;
  this.type = type;
};
Animal.prototype.toString = function () {
  return this.name + ' is a ' + this.type;
};

// Good user solution if we want private fields:
class Animal {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  toString() {
    return `${this._name} is a ${this._type}`;
  }
}

/* Takeaways:
1) Remember, properties we define in the constructor become public. So it was redundant for me to define a getter and setter.
*/
