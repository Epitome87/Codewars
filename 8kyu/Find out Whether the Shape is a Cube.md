# Find out Whether the Shape is a Cube

## Description

To find the volume (centimeters cubed) of a cuboid you use the formula:

`volume = Length * Width * Height`

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers

## My Solution

**JavaScript**

```js
const cubeChecker = (volume, side) => (side <= 0 ? false : +Math.pow(volume, 1 / 3).toFixed(2) === side);
```

**TypeScript**

```ts
export const cubeChecker = (volume: number, side: number): boolean => volume / Math.pow(side, 3) === 1;
```

### User Solution

**JavaScript**

```js
var cubeChecker = function (v, s) {
  return s > 0 && v == s * s * s;
};

var cubeChecker = function (volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
};
```

**TypeScript**

```ts
export function cubeChecker(volume: number, side: number): boolean {
  return side ** 3 === volume && volume > 0;
}
```

## Takeaways

1. Prefer integer powers rather than fractional, as the rounding gets funky.
