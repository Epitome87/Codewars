# [maxPossibleScore](https://www.codewars.com/kata/59656c69253c365e58000046)

## Description

You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

You can assume that all questions are unique.

Questions are case sensitive.

Example: `maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10`

## My Solution

**JavaScript**

```js
const maxPossibleScore = (obj, arr) => {
  const strArr = arr.map(String);
  return Object.entries(obj).reduce((acc, [key, val]) => acc + val * (strArr.includes(`${key}`) + 1), 0);
};
```

```js
const maxPossibleScore = (obj, arr) => {
  const strArr = arr.map(String);
  return Object.entries(obj).reduce((acc, [key, val]) => acc + val * (strArr.includes(`${key}`) ? 2 : 1), 0);
};
```

### User Solution

**JavaScript**

```js
const maxPossibleScore = (obj, arr) => [...Object.keys(obj), ...arr].reduce((pre, val) => pre + (obj[val] || 0), 0);
```
