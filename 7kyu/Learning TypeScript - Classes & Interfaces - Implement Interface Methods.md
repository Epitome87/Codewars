# [Learning TypeScript: Classes & Interfaces - Implement Interface Methods](https://www.codewars.com/kata/591305520c6f9f5c93000052)

## Description

**Overview**

One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

**Task**

You are given an interface IGeometricFigure:

```ts
interface IGeometricFigure {
  /** Calculates area of the figure */
  area: () => number;
  /** Calculates perimeter of the figure */
  perimeter: () => number;
}
```

Your task is to implement classes Square and Circle:

```ts
export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
```

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

## My Solution

**TypeScript**

```ts
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  constructor(public length: number) {
    this.length = length;
  }
  area() {
    return this.length * this.length;
  }
  perimeter() {
    return this.length * 4;
  }
}

export class Circle implements IGeometricFigure {
  constructor(public radius: number) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
```

### User Solution

```ts
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class GeometricShape implements IGeometricFigure {
  private _area: number;
  private _perimeter: number;

  constructor(area: number, perimeter: number) {
    this._area = area;
    this._perimeter = perimeter;
  }

  public area(): number {
    return this._area;
  }
  public perimeter(): number {
    return this._perimeter;
  }
}

export class Square extends GeometricShape {
  constructor(sideLength: number) {
    super(sideLength * sideLength, 4.0 * sideLength);
  }
}

export class Circle extends GeometricShape {
  constructor(radius: number) {
    super(radius * radius * Math.PI, 2.0 * Math.PI * radius);
  }
}
```
