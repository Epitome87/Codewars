# [Volume of a Cup](https://www.codewars.com/kata/56a13035eb55c8436a000041)

## Description

Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Examples:

```
cupVolume(1, 1, 1);
//returns 0.79

cupVolume(10, 8, 10);
//returns 638.79

cupVolume(1000, 1000, 1000);
//returns 785398163.4

cupVolume(13.123, 123.12, 1);
//returns 4436.57

cupVolume(5, 12, 31);
//returns 1858.51
```

You will only be passed positive numbers.

## My Solution

**JavaScript**

```js
const cupVolume = (d1, d2, height) => +(((Math.PI * height) / 12) * (d1 * d1 + d1 * d2 + d2 * d2)).toFixed(2);
```

### User Solution

**JavaScript**

```js
function cupVolume(d1, d2, height) {
  let r1 = d1 / 2,
    r2 = d2 / 2;
  return Math.round(((Math.PI * (r1 * r1 + r2 * r2 + r1 * r2) * height) / 3) * 100) / 100;
}
```
