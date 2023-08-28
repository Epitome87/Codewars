# [Driving School Series #1](https://www.codewars.com/kata/58999425006ee3f97c00011f)

## Description

Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

Example:

[10,10,10,18,20,20] --> 12

## My Solution

**JavaScript**

```js
const passed = (list) => {
  const passed = list.filter((el) => el <= 18);
  if (!passed.length) return 'No pass scores registered.';
  return Math.round(passed.reduce((acc, cur, arr) => acc + cur, 0) / passed.length);
};
```

### User Solution

**JavaScript**

```js
const passed = (list) =>
  Math.round(list.filter((val) => val <= 18).reduce((pre, val, _, arr) => pre + val / arr.length, 0)) ||
  `No pass scores registered.`;
```
