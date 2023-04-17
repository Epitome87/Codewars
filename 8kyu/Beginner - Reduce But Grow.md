# [Beginner - Reduce But Grow](https://www.codewars.com/kata/57f780909f7e8e3183000078)

## Description

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

```
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
```

## My Solution

**JavaScript**

```js
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
```

**TypeScript**

```ts
export const grow = (arr: number[]): number => arr.reduce((product, curr) => product * curr, 1);
```
