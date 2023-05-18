# [SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes](https://www.codewars.com/kata/56ff9b53140fcca90b000530)

## Description

**Objective**

Preloaded for you is a class Dog:

```js
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
```

You are then given a working class Labrador as your initial code.

```js
class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = 'Labrador';
    this.legs = 4;
    this.size = 'Large';
    this.master = master;
    this.loyal = true;
  }
}
```

Shorten it so that it meets the strict character count requirements for this Kata.

Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

## My Solution

**JavaScript**

```js
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}
```

```js
// Object.assign can shorter a constructor, but in this scenario it's better to call super()
class Labrador {
  constructor(name, age, gender, master) {
    Object.assign(this, { name, age, gender, species: 'Labrador', legs: 4, size: 'Large', master, loyal: true });
  }
}
```
