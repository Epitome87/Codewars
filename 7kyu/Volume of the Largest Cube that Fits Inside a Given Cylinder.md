# [Volume of the Largest Cube that Fits Inside a Given Cylinder](https://www.codewars.com/kata/581e09652228a337c20001ac)

## Description

**Task**

Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

Don't round your result. The result needs to be within 0.01 error margin of the expected result.

HINT: There are two cases to consider. Will it be the cylinder's height or the cylinder's radius that determines the maximum size of your cube? An if/else statement might be useful here.

**Examples**

```js
cubeVolume(3, 7); //27
cubeVolume(11, 5); //353.55
```

## My Solution

**JavaScript**

```js
const cubeVolume = (h, r) => Math.min(h, r * 2 ** 0.5) ** 3;
```

```js
const cubeVolume = (h, r) => {
  const side = 2 ** 0.5 * r;
  return h < side ? h ** 3 : side ** 3;
};
```

### User Solution

**JavaScript**

```js
function cubeVolume(h, r) {
  const side = Math.hypot(r, r);

  if (h >= side) {
    let volOfSquare = Math.pow(side, 3);
    return volOfSquare;
  } else if (h < side) {
    let side = h;
    return Math.pow(side, 3);
  }
}
```

## Takeaways

1. There is a handy `Math.hypot()` method we can use to calculate a hypotenuse! It can actually be used for more: `The Math.hypot() static method returns the square root of the sum of squares of its arguments.` Thus, it does not just have to be limited to receiving two sides of a triangle. For working with triangles, `Math.hypot(v1, v2)` is equivalent to `Math.sqrt(v1*v1 + v2*v2)`.
