# [Defining Getters and Setters on an Existing Class](https://www.codewars.com/kata/55bcf04de45497c54a0000d0)

## Description

**Introduction to getter and setter**

Javascript classes can declare getter and setters using the following format:

```js
class Engine {
  constructor(watts) {
    this.watts = watts;
  }
  get horsepower() {
    return this.watts / 745.7;
  }
  set horsepower(hp) {
    this.watts = 745.7 * hp;
  }
}
```

and be used as so:

```js
let bossV8 = new Engine(279637.5);
console.log(bossV8.horsepower); // => 375
bossV8.horsepower = 385;
console.log(bossV8.watts); // => 287094.5
```

**The problem**

There is a preloaded class of `Person` and it needs a new getter and setter. `Person` is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
```

and can be used as so:

```js
let marcusFenix = new Person('Marcus', 'Fenix');
console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
console.log(marcusFenix.getName()); // => 'Marcus Fenix'
```

- Add a getter of `name` that returns the full name
- Add a setter of `name` that modifies first name and last name

After adding the new getter and setter, a Person can be used as so:

```js
let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
```

## My Solution

**JavaScript**

```js
Object.defineProperty(Person.prototype, 'name', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  },
});
```

### User Solution

**JavaScript**

```js
Object.defineProperty(Person.prototype, 'name', {
  get: Person.prototype.getName,
  set: function (name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
});
```
