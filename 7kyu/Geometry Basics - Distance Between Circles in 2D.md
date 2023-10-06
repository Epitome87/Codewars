# [Geometry Basics: Distance Between Circles in 2D](https://www.codewars.com/kata/58e3031ce265671f6a000542)

## Description

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius which is a number.

Write a function calculating distance between Circle a and Circle b.

If they're overlapping or one is completely within the other, just return zero.

Tests round answers to 6 decimal places, so you don't need to round them yourselves.

## My Solution

**JavaScript**

```js
const distanceBetweenCircles = (a, b) => (
  (distance = ((a.center.x - b.center.x) ** 2 + (a.center.y - b.center.y) ** 2) ** 0.5 - a.radius - b.radius),
  distance < 0 ? 0 : distance
);
```

```js
const distanceBetweenCircles = (a, b) => {
  const distance =
    Math.sqrt(Math.pow(a.center.x - b.center.x, 2) + Math.pow(a.center.y - b.center.y, 2)) - a.radius - b.radius;
  return distance < 0 ? 0 : distance;
};
```

### User Solution

**JavaScript**

```js
const distanceBetweenCircles = (a, b) =>
  Math.max(Math.hypot(b.center.x - a.center.x, b.center.y - a.center.y) - a.radius - b.radius, 0);
```
