/*
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN
*/

// My solution:
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    return 2 * (this.length * this.width) + 2 * (this.length * this.height) + 2 * (this.width * this.height);
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

/* Takeaways:
1) It's just 'super', not 'this.super'!
2) Could have simplified surface area by factoring out the 2 in each addition.
3) For constructors with multiple arguments, it may be simpler to do:
 constructor(length, width, height) {
    Object.assign(this, { length, width, height })
  }
 */
