# [One Line Task: Area or Perimeter](https://www.codewars.com/kata/5ab84aa4206a29ce21000047)

## Description

**Task**

You are given the length and width of a 4 sided polygon. The polygon can either be a rectangle or a square.

Your job is to check if it is a square then return the area. If it is a rectangle then return its perimeter.

```js
Test.assertEquals(area_or_perimeter(6, 10), 32);
```

**Note**

For the purposes of Kata you will assume that it is a square when lengths are equal otehrwise it is a rectangle.

**Code Limit**

code.length < 39 characters.

Advice: if your code length is much longer than the limit, giving up is also a good choice :D

## My Solution

**JavaScript**

```js
areaOrPerimeter = (l, w) => (l - w ? 2 * (l + w) : l * w);
```

### User Solution

**JavaScript**

```js
areaOrPerimeter = (a, b) => (a - b ? (a + b) << 1 : a * b);
```
