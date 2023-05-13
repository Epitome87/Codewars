# [Learning TypeScript: Classes & Interfaces - Inheritance](https://www.codewars.com/kata/59138d93eefeaecdbe000031)

## Description

**Overview**

Preloaded for you in this Kata is an interface IAnimal:

```ts
declare var IAnimal: {
  new (name: string, age: number, legs: number, species: string, status: string): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}
```

**Task**

**I. Animal**

Define class Animal that implements IAnimal. The constructor function for Animal should accept 4 arguments in total in the following order: name, age, legs, species, status. Furthermore, the introduce() method for Animal should return string with the following content: Hello, my name is ${name} and I am ${age} years old.

When done define the following classes that inherit from Animal using the extends keyword.

**II. Shark**

The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

**III. Cat**

The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce() method for Cat should be identical to the original introduce() except there should be exactly 2 spaces and the words "Meow meow!" after that. For example:

```ts
var example = new Cat('Example', 10, 'Happy');
example.introduce() === 'Hello, my name is Example and I am 10 years old.  Meow meow!'; // Notice the TWO spaces - very important
```

**IV. Dog**

The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce() method as any other animal, but they have their own method called greetMaster() which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).

**Credits**

This is TypeScript version of kata "Fun with ES6 Classes #2 - Animals and Inheritance" by @donaldsebleung

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

## My Solution

**TypeScript**

```ts
interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public legs: number,
    public species: string,
    public status: string
  ) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 0, 'shark', status);
  }
}

export class Cat extends Animal {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + '  Meow meow!';
  }
}

export class Dog extends Animal {
  constructor(public name: string, public age: number, public status: string, public master: string) {
    super(name, age, 4, 'dog', status);
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
```

### User Solution

**TypeScript**

```ts
declare var IAnimal: {
  new (name: string, age: number, legs: number, species: string, status: string): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => void;
}

export class Animal implements IAnimal {
  constructor(public name, public age, public legs, public species, public status) {}
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

export class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

export class Dog extends Animal {
  constructor(name, age, status, public master: string) {
    super(name, age, 4, 'dog', status);
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
```
