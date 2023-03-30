/*
Fun with ES6 Classes #4 - Cubes and Setters
Overview
In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

Task
Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.

Articles of Interest
Below are some articles of interest that may help you complete this Kata:

Setters - Mozilla Developer
What are getters and setters? - Stack Overflow
ES6 Classes Intro (includes section on getters and setters)
*/

// My solution:
class Cube {
  constructor(length) {
    this._length = length;
  }

  set length(val) {
    this._length = val;
  }

  get length() {
    return this._length;
  }

  set surfaceArea(val) {
    this._length = Math.sqrt(val / 6);
  }

  get surfaceArea() {
    return this._length * this._length * 6;
  }

  set volume(val) {
    this._length = Math.pow(val, 1 / 3);
  }

  get volume() {
    return this._length ** 3;
  }
}

// Top user solution:
class Cube {
  constructor(length) {
    this.length = length;
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(surfaceArea) {
    this.length = Math.sqrt(surfaceArea / 6);
  }
}
