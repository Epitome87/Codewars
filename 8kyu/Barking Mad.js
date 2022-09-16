/*
 */

// My solution:
function Dog(breed) {
  this.breed = breed;
}

const snoopy = new Dog('Beagle');

snoopy.bark = function () {
  return 'Woof';
};

const scoobydoo = new Dog('Great Dane');

scoobydoo.bark = function () {
  return 'Woof';
};

// Top user solution:
function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog('Beagle');

Dog.prototype.bark = function () {
  return 'Woof';
};

var scoobydoo = new Dog('Great Dane');

// Another good user solution:
class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return 'Woof';
  }
}

let snoopy = new Dog('Beagle');
let scoobydoo = new Dog('Great Dane');

/* Takeaways:
1) So many ways to add methods using functional classes! 
Outside this challenge, I'd prefer using the Class syntax.
*/
