# [Round by 0.5 Steps](https://www.codewars.com/kata/51f1342c76b586046800002a/solutions)

## Description

Round any given number to the closest 0.5 step

I.E.

```js
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
```

Round up if number is as close to previous and next 0.5 steps.

```js
solution(4.75) == 5;
```

## My Solution

**JavaScript**

```js
const solution = (n) => Math.round(n / 0.5) * 0.5;
// Can simplify:
const solution = (n) => Math.round(n * 2) / 2;
```
