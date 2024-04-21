# [Beginner - Lost Without a Map](https://www.codewars.com/kata/57f781872e3d8ca2a000007e)

## Description

Given an array of integers, return a new array with each value doubled.

For example:

`[1, 2, 3] `--> `[2, 4, 6]`

## My Solution

**JavaScript**

```js
const maps = (x) => x.map((n) => n * 2);
```

**TypeScript**

```ts
export const maps = (nums: number[]): number[] => nums.map((num) => num * 2);
```

**Python**

```py
def maps(a):
    return [x * 2 for x in a]
```
