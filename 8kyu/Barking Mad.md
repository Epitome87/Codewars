# [Barking Mad](https://www.codewars.com/kata/54dba07f03e88a4cec000caf)

## Description

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

```js
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
```

Use method prototypes to enable all Dogs to bark.

## My Solution

**JavaScript**

```js
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
```

### User Solution

**JavaScript**

```js
function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog('Beagle');

Dog.prototype.bark = function () {
  return 'Woof';
};

var scoobydoo = new Dog('Great Dane');
```
