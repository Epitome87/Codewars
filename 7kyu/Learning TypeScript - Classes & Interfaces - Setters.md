# [Learning TypeScript: Classes & Interfaces - Setters](https://www.codewars.com/kata/590b85b745eaa415e10000b1)

## Description

N.B.: To solve this kata you need to choose "2.4/ES6" target.

**Overview**

In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previous exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

**Task**

You're given the ICuboid interface. Define a class Cube that implements ICuboid. Constructor function of Cube takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

## My Solution

**TypeScript**

```ts
interface ICuboid {
  length: number;
  surfaceArea: number;
  volume: number;
}

export class Cube implements ICuboid {
  constructor(public length: number) {}

  public get surfaceArea() {
    return this.length * this.length * 6;
  }

  public get volume() {
    return this.length * this.length * this.length;
  }

  public set surfaceArea(area: number) {
    this.length = Math.sqrt(area / 6);
  }

  public set volume(vol: number) {
    this.length = Math.pow(vol, 1 / 3);
  }
}
```
