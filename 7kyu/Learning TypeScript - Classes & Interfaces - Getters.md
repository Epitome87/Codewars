# [Learning TypeScript - Classes & Interfaces - Getters](https://www.codewars.com/kata/599d636e607719edf600010a)

## Description

N.B.: To solve this kata you need to choose "2.4/ES6" target.

**Task**

Define the following classes:

**I. Cuboid**

The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

**II. Cube**

Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

**Articles of Interest**

Below are some articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?  
getter - Javascript | MDN

**Credits**

This is TypeScript version of kata "Fun with ES6 Classes #3 - Cuboids, Cubes and Getters" by @donaldsebleung

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

## My Solution

**TypeScript**

```ts
export class Cuboid {
  constructor(public length: number, public width: number, public height: number) {}
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  constructor(length: number) {
    super(length, length, length);
  }
}
```

## Takeaways

1. We could have also done:

```ts
export class Cuboid {
  length: number;
  width: number;
  height: number;

  constructor(l: number, w: number, h: number) {
    this.length = l;
    this.width = w;
    this.height = h;
  }
}
```

2. Although it was not necessary for this Kata, we should have defined the return type for each method!
