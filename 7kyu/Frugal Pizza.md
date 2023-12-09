# [Frugal Pizza](https://www.codewars.com/kata/58e4fbd63258cefa4100002c)

## Description

You love pizza, but you also love getting bang for your buck. One thing that irks you when you go to your local pizza place is that although they list the diameter and price of each pizza, they don't list the cost per square inch. (Unbelievable, I know!)

Write a function that takes two arguments - diameter, in inches, and price - and returns the price per square inch to two decimal places. (as a number, not a string)

```js
function pizzaPrice(diameter, price) {
  // ... your code
}

pizzaPrice(7, 4.3); // should return 0.11
```

Assume that the pizza is a circular pizza of uniform diameter, and use Math.PI as the value of pi.

If you are given too few arguments, or if they aren't numbers, then return 0. In C# you will be given only numbers.

## My Solution

**JavaScript**

```js
const pizzaPrice = (diameter, price) => +(price / (Math.PI * (diameter / 2) ** 2)).toFixed(2) || 0;
```

```js
const pizzaPrice = (diameter, price) => {
  const area = Math.PI * (diameter / 2) ** 2;
  return +(price / area).toFixed(2) || 0;
};
```

### User Solution

**JavaScript**

```js
function pizzaPrice(diameter, price) {
  return +(price / ((Math.PI / 4) * diameter ** 2)).toFixed(2) || 0;
}
```
