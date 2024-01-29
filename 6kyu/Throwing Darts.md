# [Throwing Darts](https://www.codewars.com/kata/525dfedb5b62f6954d000006)

## Description

You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

- 0 points - radius above 10
- 5 points - radius between 5 and 10 inclusive
- 10 points - radius less than 5

If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:

```
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
```

## My Solution

**JavaScript**

```js
const scoreThrows = (radii) => (
  (score = radii.reduce((sum, r) => sum + (r < 5 ? 10 : r <= 10 ? 5 : 0), 0)),
  score + (score / radii.length >= 10) * 100
);
```

```js
const scoreThrows = (radii) => {
  const scores = radii.map((radius) => (radius < 5 ? 10 : radius <= 10 ? 5 : 0));
  const bonus = radii.length && scores.every((score) => score === 10) * 100;
  const totalScore = scores.reduce((acc, cur) => acc + cur, 0);
  return totalScore + bonus;
};
```
