# [Null-Conditional Operator (C# 6.0)](https://www.codewars.com/kata/55bf6b640e7ec0138e000071)

## Description

In ECMAScript 2020, there is a new operator `?.` called the **optional chaining operator**. This operator is available from Node.js v14 onwards.

It's nothing revolutionary - just an example of syntactic sugar but a pretty neat one.

**Use case**

Imagine you have a `Car`, the car has an Engine, the engine has a `Gearbox` and the gearbox has some property you are interested in, for example `numberOfGears`. Now, the car could be from junkyard and the gearbox or even the engine could be missing (null).

The name of each property is the name of the class it contains, converted to the appropriate case, such that if all components are present the final property could be accessed by:

`Car.engine.gearbox.numberOfGears`

How to determine the number of gears in a car?

**Instructions**

Complete the method called getNumberOfGears being added to the prototype of the Car class. This method will return the value of the numberOfGears property of the gearbox or null if the gearbox (or anything else) is missing.

**Constraints**

Find some information about the `?.` and `??` operators and try to write the method without using `if` or the ternary operator `?:`.

## My Solution

**JavaScript**

```js
Car.prototype.getNumberOfGears = function getNumberOfGears() {
  return this.engine?.gearbox?.numberOfGears ?? null;
};
```

### User Solution

**JavaScript**

```js

```
